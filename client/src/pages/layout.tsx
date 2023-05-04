import { Footer } from "@client/components/atoms/Footer";
import { Navbar } from "@client/components/organisms/Navbar";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
