import React from "react";


//to show a copyright message in a <p> with a dynamically updated year.
const currentYear = new Date().getFullYear()
function Footer(){
    return (
        <div className="footer">
            <p>Created by Manikandan Copyright ⓒ {currentYear}</p>
        </div>
    );
};
export default Footer;