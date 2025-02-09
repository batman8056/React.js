import React from "react";

function Emojipedias(props){
    return(
        <div>
            <dl className="dictionary">
                <div className="term">
                        <dt>
                            <p hidden={true} >{props.id}</p>
                            <h2 className="emoji">{props.emoji}</h2>
                            <h2>{props.name}</h2>
                        </dt>
                        <dd>
                            <h2>{props.meaning}</h2>
                        </dd>
                    </div>
            </dl>
             
    </div>
    )
};
export default Emojipedias;