import '../app/globals.css';
import React from "react";
import Navigation from './partials/navigation'
import Footer from "./partials/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
