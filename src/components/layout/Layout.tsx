import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MyRoleBar } from "@/components/MyRoleBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <MyRoleBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
