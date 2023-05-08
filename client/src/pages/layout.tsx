import { Footer } from "@client/components/atoms/Footer";
import { LoaderScreen } from "@client/components/molecules/LoaderScreen";
import { Navbar } from "@client/components/organisms/Navbar";
import { useLoading } from "@client/hooks/useLoading";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({
  children,
  title = ".:: E-Commerce ::.",
}) => {
  const loading = useLoading();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`bg-gray-100 `}>
        <Navbar />
        {children}
        {loading && <LoaderScreen />}
        <Footer />
      </div>
    </>
  );
};
