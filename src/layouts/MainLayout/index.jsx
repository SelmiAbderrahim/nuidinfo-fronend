import React from "react";
import Toolbar from "../../components/Navigation/Toolbar.jsx/index.js";
import Footer from "../../components/footer";
const index = ({ children }) => {
  return (
    <main>
      <div class="big-wrapper light">
      <Toolbar/>
      
      {children}

      
      </div>
    </main>
  );
};

export default index;
