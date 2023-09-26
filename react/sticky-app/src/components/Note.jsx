import React  from "react";

export default function Note({className,heading,content}){
    return (
        <div className={className}>
        <h3>{heading}</h3>
        <p>{content}</p>
    </div>
    );
}
