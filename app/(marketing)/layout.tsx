import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function MarketingSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
