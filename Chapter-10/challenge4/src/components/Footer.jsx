import React from "react";

function Footer() {
    //to show a copyright message in a <p> with a dynamically updated year.
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Created by Manikandan Copyright ⓒ {year}</p>
      </footer>
    );
  }
  
  export default Footer;