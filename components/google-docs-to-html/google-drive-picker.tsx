import { Button } from "../buttons";
import React, { useEffect, useState } from "react";
import { useScript, useToggle } from "usehooks-ts";
import googleDocsLogo from "../../public/images/logos/square/google-docs.png";
import Image from "next/image";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import {
  Button as MyButton,
  Dialog,
  DialogTrigger,
  Popover,
} from "react-aria-components";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import autoEmbedsImage from "./convert-standalone-link-to-embed.png";
import singleCellTableImage from "./convert-single-cell-table-to-code-block.png";

declare let google: any;

type progress =
  | "load-scripts"
  | "select-document"
  | "specify-options"
  | "exporting"
  | "exported";

export default function GoogleDrivePicker() {
  const apiScriptStatus = useScript("https://apis.google.com/js/api.js");
  const clientScriptStatus = useScript(
    "https://accounts.google.com/gsi/client"
  );
  const [currentProgress, setCurrentProgress] =
    useState<progress>("load-scripts");
  const [isPickerApiLoaded, setIsPickerApiLoaded] = useState(false);
  const [documentName, setDocumentName] = useState<string | null>(null);
  const [documentId, setDocumentId] = useState<string | null>(null);
  const [emailAddress, setEmailAddress] = useState<string | null>(null);
  const [asHtmlDocument, toggleAsHtmlDocument] = useToggle(false);
  const [autoDetectEmbeds, toggleAutoDetectEmbeds] = useToggle(false);
  const [
    convertSingleCellTableToCodeBlock,
    toggleConvertSingleCellTableToCodeBlock,
  ] = useToggle(false);
  const [exportError, setExportError] = useState<string | null>(null);
  const hasScriptLoadingError =
    apiScriptStatus === "error" || clientScriptStatus === "error";

  useEffect(() => {
    if (
      apiScriptStatus === "ready" &&
      clientScriptStatus === "ready" &&
      !isPickerApiLoaded
    ) {
      loadApis();
    }
  }, [apiScriptStatus, clientScriptStatus, isPickerApiLoaded]);

  async function exportDocument(): Promise<void> {
    try {
      setCurrentProgress("exporting");

      const documentResponse = await window.gapi.client.docs.documents.get({
        documentId: documentId,
      });
      const documentContents = JSON.stringify(documentResponse.result);

      await fetch("/api/google-docs-to-html", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: emailAddress,
          document: documentContents,
          asHtmlDocument: asHtmlDocument,
          autoDetectEmbeds: autoDetectEmbeds,
          convertSingleCellTableToCodeBlock: convertSingleCellTableToCodeBlock,
        }),
      });

      setCurrentProgress("exported");
    } catch {
      setExportError(
        "An error occurred while exporting your document. Please try again."
      );
    }
  }

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
        setCurrentProgress("select-document");
      },
    });
  }

  function handleOpenPicker(): void {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PICKER_CLIENT_ID ?? "",
      scope:
        "https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/documents.readonly https://www.googleapis.com/auth/userinfo.email",
      callback: tokenClientCallback,
    });

    client.requestAccessToken();
  }

  function resetDocument(): void {
    setCurrentProgress("select-document");
    setDocumentId(null);
    setDocumentName(null);
    setEmailAddress(null);
    setExportError(null);
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

  async function pickerCallback(data: any): Promise<void> {
    if (
      data.action === google.picker.Action.PICKED &&
      data[google.picker.Response.DOCUMENTS] &&
      data[google.picker.Response.DOCUMENTS].length > 0
    ) {
      const document = data[google.picker.Response.DOCUMENTS][0];
      setDocumentId(document[google.picker.Document.ID] as string);
      setDocumentName(document[google.picker.Document.NAME] as string);

      const userInfoResponse = await window.gapi.client.oauth2.userinfo.get();
      setEmailAddress(userInfoResponse.result.email);
    }
  }

  if (documentId) {
    return (
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex items-center gap-x-1">
            <Image
              className="h-6 w-6"
              src={googleDocsLogo}
              alt="Google Docs Logo"
            />
            <div className="font-bold">{documentName}</div>
          </div>
        </div>
        {currentProgress === "exported" && (
          <div>
            <div>
              Thank you for using our HTML export tool. We are exporting the
              document to HTML in the background. You will shortly receive an
              email at <span className="font-bold">{emailAddress}</span> with a
              link to a ZIP file containing the exported HTML and images (if
              any)
            </div>
            <div className="mt-8">
              <button className="text-gray-600 text-sm" onClick={resetDocument}>
                <div className="flex items-center gap-x-1 text-blue-600 hover:underline">
                  <ArrowUturnLeftIcon className="w-4 h-4" />
                  Export another document
                </div>
              </button>
            </div>
          </div>
        )}
        {currentProgress === "exporting" && (
          <div>Downloading document, please wait...</div>
        )}
        {currentProgress === "select-document" && (
          <div>
            <div className="mb-8">
              <button className="text-gray-600 text-sm" onClick={resetDocument}>
                <div className="flex items-center gap-x-1 text-blue-600 hover:underline">
                  <ArrowUturnLeftIcon className="w-4 h-4" />
                  Select a different document
                </div>
              </button>
            </div>
            <div className="text-left mb-10 max-w-md mx-auto">
              <fieldset>
                <legend className="sr-only">Export settings</legend>
                <div className="space-y-5">
                  <div className="relative flex items-start">
                    <DialogTrigger>
                      <div className="flex h-6 items-center">
                        <input
                          id="asHtmlDocument"
                          name="asHtmlDocument"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={asHtmlDocument}
                          onChange={toggleAsHtmlDocument}
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="asHtmlDocument"
                          className="font-medium text-gray-900"
                        >
                          <div className="flex gap-x-1">
                            <div>Export complete HTML document</div>
                            <MyButton>
                              <InformationCircleIcon className="h-5- w-5 text-gray-600" />
                            </MyButton>
                          </div>
                        </label>
                      </div>
                      <Popover>
                        <Dialog className="border border-gray-200 shadow-lg rounded bg-white p-4">
                          <div className="prose prose-sm">
                            <p>
                              We will generate a complete HTML document with{" "}
                              <code>&lt;head&gt;</code> and{" "}
                              <code>&lt;body&gt;</code> elements if enabled.
                              Otherwise, we will only generate a standalone HTML
                              fragment with the content.
                            </p>
                          </div>
                        </Dialog>
                      </Popover>
                    </DialogTrigger>
                  </div>
                  <div className="relative flex items-start">
                    <DialogTrigger>
                      <div className="flex h-6 items-center">
                        <input
                          id="autoDetectEmbeds"
                          name="autoDetectEmbeds"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={autoDetectEmbeds}
                          onChange={toggleAutoDetectEmbeds}
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="autoDetectEmbeds"
                          className="font-medium text-gray-900"
                        >
                          <div className="flex gap-x-1">
                            <div>Auto-detect embeds</div>
                            <MyButton>
                              <InformationCircleIcon className="h-5- w-5 text-gray-600" />
                            </MyButton>
                          </div>
                        </label>
                      </div>
                      <Popover>
                        <Dialog className="border border-gray-200 shadow-lg rounded bg-white p-4">
                          <div className="prose prose-sm">
                            <p>
                              When enabled, we will attempt to convert
                              standalone links in a single paragraph to the
                              proper embed code block. This is useful for
                              generating embeds for links to social media sites
                              like YouTube, TikTok, Facebook, Instagram, etc.
                            </p>
                            <div className="not-prose">
                              <Image
                                src={autoEmbedsImage}
                                alt="Auto detect embeds"
                              />
                            </div>
                          </div>
                        </Dialog>
                      </Popover>
                    </DialogTrigger>
                  </div>
                  <div className="relative flex items-start">
                    <DialogTrigger>
                      <div className="flex h-6 items-center">
                        <input
                          id="convertSingleCellTableToCodeBlock"
                          name="convertSingleCellTableToCodeBlock"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          checked={convertSingleCellTableToCodeBlock}
                          onChange={toggleConvertSingleCellTableToCodeBlock}
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="convertSingleCellTableToCodeBlock"
                          className="font-medium text-gray-900"
                        >
                          <div className="flex gap-x-1">
                            <div>Convert single-cell table to code block</div>
                            <MyButton>
                              <InformationCircleIcon className="h-5- w-5 text-gray-600" />
                            </MyButton>
                          </div>
                        </label>
                      </div>
                      <Popover>
                        <Dialog className="border border-gray-200 shadow-lg rounded bg-white p-4">
                          <div className="prose prose-sm">
                            <p>
                              This option is useful when you want to include
                              programming code snippets in your content. When
                              enabled, we will convert any single-cell table
                              (i.e. a table with one row and one column) to a
                              code block.
                            </p>
                            <div className="not-prose">
                              <Image
                                src={singleCellTableImage}
                                alt="Convert single-cell table to code blocks"
                              />
                            </div>
                          </div>
                        </Dialog>
                      </Popover>
                    </DialogTrigger>
                  </div>
                </div>
              </fieldset>
            </div>
            <Button variant="primary" size="lg" onClick={exportDocument}>
              Export document
            </Button>
            <div className="text-gray-600 italic mt-8">
              When you click the Export document button, we will export the
              document to HTML in the background and send an email to{" "}
              <span className="font-bold">{emailAddress}</span> with a link to a
              ZIP file containing the exported HTML and images (if any)
            </div>
          </div>
        )}
        {exportError ? (
          <div className="mt-2 text-red-600">{exportError}</div>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleOpenPicker}
        isDisabled={!isPickerApiLoaded}
      >
        <div className="flex items-center">
          {!isPickerApiLoaded && !hasScriptLoadingError ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
          <span>
            {!isPickerApiLoaded && !hasScriptLoadingError
              ? "Please wait..."
              : "Select document"}
          </span>
        </div>
      </Button>
      <div className="italic text-gray-600 mt-8">
        Clicking the button above will prompt you to give Cloudpress access to
        your Google account. We will then display the Google Drive picker that
        allows you to select the file you want to export.
      </div>
      {hasScriptLoadingError ? (
        <div className="mt-2 text-red-600">
          An error occurred while loading the Google scripts. Perhaps you have a
          blocker installed?
        </div>
      ) : null}
    </div>
  );
}
