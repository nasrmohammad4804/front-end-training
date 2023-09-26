import React from "react";
import Note from "./Note";


export default function StickyNote(){

    const boxes =getNoteData();

    
    const elements = boxes.map((element,index) => {
        
          return <Note className={element.className} heading={element.heading} content={element.content} key={index}/>
        
    });

    return <div className="container"> {elements} </div>


function getNoteData() {
     return [
        {
            className:'box box1',
            heading:'Title #1',
            content:'Text Content #1'
        },
        {
            className:'box box2',
            heading:'Title #2',
            content:'Text Content #2'
        },
        {
            className:'box box3',
            heading:'Title #3',
            content:'Text Content #3'
        },
        {
            className:'box box4',
            heading:'Title #4',
            content:'Text Content #4'
        },
        {
            className:'box box5',
            heading:'Title #5',
            content:'Text Content #5'
        },
        {
            className:'box box6',
            heading:'Title #6',
            content:'Text Content #6'
        }
    ]
}
}
