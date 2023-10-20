import { useScript } from "usehooks-ts";
import { useEffect, useState } from "react";

declare let google: any;

type PickerStatus = "loading" | "ready" | "error";

interface DocumentSelection {
  id: string;
  name: string;
  email: string;
}

interface PickerConfiguration {
  documentSelected: (document: DocumentSelection) => void;
}

export default function useGoogleDocsPicker(
  config: PickerConfiguration
): [PickerStatus, () => void] {
  const apiScriptStatus = useScript("https://apis.google.com/js/api.js");
  const clientScriptStatus = useScript(
    "https://accounts.google.com/gsi/client"
  );
  const [status, setStatus] = useState<PickerStatus>("loading");
  const [isPickerApiLoaded, setIsPickerApiLoaded] = useState(false);

  useEffect(() => {
    if (
      apiScriptStatus === "ready" &&
      clientScriptStatus === "ready" &&
      !isPickerApiLoaded
    ) {
      loadApis();
    }

    if (
      (apiScriptStatus === "error" || clientScriptStatus === "error") &&
      !isPickerApiLoaded
    ) {
      setStatus("error");
    }
  }, [apiScriptStatus, clientScriptStatus, isPickerApiLoaded]);

  function loadApis(): void {
    window.gapi.load("client:auth:picker", {
      callback: async () => {
        await window.gapi.client.load(
          "https://docs.googleapis.com/$discovery/rest?version=v1"
        );
        await window.gapi.client.load(
          "https://www.googleapis.com/discovery/v1/apis/oauth2/v1/rest?version=v1"
        );

        setIsPickerApiLoaded(true);
        setStatus("ready");
      },
    });
  }

  function openPicker(): void {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PICKER_CLIENT_ID ?? "",
      scope:
        "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/userinfo.email",
      callback: tokenClientCallback,
    });

    client.requestAccessToken();
  }

  async function pickerCallback(data: any): Promise<void> {
    if (
      data.action === google.picker.Action.PICKED &&
      data[google.picker.Response.DOCUMENTS] &&
      data[google.picker.Response.DOCUMENTS].length > 0
    ) {
      const document = data[google.picker.Response.DOCUMENTS][0];
      const documentId = document[google.picker.Document.ID] as string;
      const documentName = document[google.picker.Document.NAME] as string;

      const userInfoResponse = await window.gapi.client.oauth2.userinfo.get();

      config.documentSelected({
        id: documentId,
        name: documentName,
        email: userInfoResponse.result.email,
      });
    }
  }

  function tokenClientCallback(tokenResponse: any): void {
    const recentDocsView = new google.picker.DocsView(
      google.picker.ViewId.DOCUMENTS
    )
      .setMode(google.picker.DocsViewMode.LIST)
      .setMimeTypes("application/vnd.google-apps.document");
    const docsView = new google.picker.DocsView()
      .setIncludeFolders(true)
      .setMode(google.picker.DocsViewMode.LIST)
      .setMimeTypes("application/vnd.google-apps.document");
    const sharedDrivesView = new google.picker.DocsView()
      .setIncludeFolders(true)
      .setMode(google.picker.DocsViewMode.LIST)
      .setMimeTypes("application/vnd.google-apps.document")
      .setEnableDrives(true);
    const picker = new google.picker.PickerBuilder()
      .setTitle("Select the document you want to export")
      .enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
      .setDeveloperKey(
        process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PICKER_DEVELOPER_KEY ?? ""
      )
      .setAppId(process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PICKER_APP_ID ?? "")
      .setOAuthToken(tokenResponse.access_token)
      .addView(recentDocsView)
      .addView(docsView)
      .addView(sharedDrivesView)
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  }

  return [status, openPicker];
}
