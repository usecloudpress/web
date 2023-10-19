import GoogleDrivePicker from "./google-drive-picker";
import Link from "next/link";
import React from "react";

export default function ExportComponent(): JSX.Element {
  return (
    <div className="bg-white px-6 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <GoogleDrivePicker />
        <div className="mt-12">
          <p className="italic">
            Questions or concerns?{" "}
            <Link
              href="#faq"
              className="text-blue-600 hover:text-blue-500 font-semibold"
            >
              Check out our FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
