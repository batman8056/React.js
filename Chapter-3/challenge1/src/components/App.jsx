import React from "react";
import Heading from "./Heading.jsx"
import Paragraph from "./Paragraph.jsx";
import List from "./List.jsx";

function App(){
    return (
        <div>
        {/* function we convert as a JSX element it is called component and we can reuse it again */}
        {/* self closing tag */}
        <Heading />
        <Paragraph />
        <List />
        <List />
        </div>
    )
};
export default App;