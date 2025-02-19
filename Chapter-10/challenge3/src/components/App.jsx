import React,{useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx"

function App(){
    const [init, setInit] = useState({
        title: "",
        content: ""
    });
    function handleAction(){
        setInit(init);
    }
    return(
        <div>
            <Header />
            <CreateArea init={init} handleAction={handleAction}/>
            <Footer />
        </div>
    )
}
export default App;