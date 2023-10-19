import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  emailAddress: z.string().email(),
  document: z.string(),
  autoDetectEmbeds: z.boolean(),
  convertSingleCellTableToCodeBlock: z.boolean(),
});

type Body = z.infer<typeof schema>;

function isValidBody(body: any): body is Body {
  const { success } = schema.safeParse(body);
  return success;
}

export async function POST(request: Request) {
  const body = await request.json();

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
        autoDetectEmbeds: body.autoDetectEmbeds,
        convertSingleCellTableToCodeBlock:
          body.convertSingleCellTableToCodeBlock,
      })
    );

    const response = await fetch(
      "https://api.usecloudpress.com/v2/convert/google-docs/markdown",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDPRESS_INTERNAL_API_KEY}`,
        },
        body: formData,
      }
    );

    return NextResponse.json(await response.json());
  }

  return NextResponse.json(
    { message: "Invalid payload" },
    {
      status: 422,
    }
  );
}
