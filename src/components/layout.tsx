import * as React from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
