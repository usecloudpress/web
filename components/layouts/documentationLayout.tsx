import React from "react";
import Footer from "../footer";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const DocumentationLayout = ({ children }: Props) => {
  const router = useRouter();
  console.log("Router path:", router.asPath);

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DocumentationLayout;
