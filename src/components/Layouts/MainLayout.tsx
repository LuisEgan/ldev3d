import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const MainLayout = ({
  children,
  title = "This is the default title",
}: Props) => (
  <div className="bg-gray-900 text-gray-400 min-w-[350px]">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/ico/L.ico"></link>
    </Head>

    <Header />

    <div className="flex">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden overflow-y-auto md:ml-16 mt-[12vh]">
        {children}
        <Footer />
      </div>
    </div>
  </div>
);

export default MainLayout;
