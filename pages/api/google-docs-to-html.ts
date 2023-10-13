// See https://stackoverflow.com/a/71799369
// and https://github.com/pillarjs/multiparty

import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

type ResponseData = {
  message: string;
};

const schema = z.object({
  emailAddress: z.string().email(),
  document: z.string(),
  asHtmlDocument: z.boolean(),
  autoDetectEmbeds: z.boolean(),
  convertSingleCellTableToCodeBlock: z.boolean(),
});

type Body = z.infer<typeof schema>;

function isValidBody(body: any): body is Body {
  const { success } = schema.safeParse(body);
  return success;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const { body } = req;

  if (isValidBody(body)) {
    const formData = new FormData();
    formData.append(
      "file",
      new Blob([body.document], {
        type: "application/vnd.google-apps.document",
      }),
      "document"
    );
    formData.append(
      "options",
      JSON.stringify({
        emailAddress: body.emailAddress,
        asHtmlDocument: body.asHtmlDocument,
        autoDetectEmbeds: body.autoDetectEmbeds,
        convertSingleCellTableToCodeBlock:
          body.convertSingleCellTableToCodeBlock,
      })
    );

    await fetch("https://api.usecloudpress.com/v2/convert/google-docs/html", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDPRESS_INTERNAL_API_KEY}`,
      },
      body: formData,
    });

    res.status(200).json({ message: "Hello from Next.js!" });
    return;
  }

  res.status(422).json({ message: "Invalid payload" });
}
