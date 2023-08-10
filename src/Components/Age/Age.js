import React from "react";

const Age = (props) => {



    console.log(props.name)

    let ageTxt = "My age is " + props.children

    return (
        <div>
            <h3>My age is {props.children} {props.name}</h3>
        </div>
        
    )

}

export default Age;