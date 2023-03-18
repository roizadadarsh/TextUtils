import React, {useState} from 'react'

export default function TextForm(props) {
    const click =()=>{
        let upper = text.toUpperCase();
        setText(upper)
        props.showAlert("Converted to uppercase","success")
    

    }
    const click1 =()=>{
        let upper = text.toLowerCase();
        setText(upper)
        props.showAlert("Converted to lowercase","success")
        
    }
    const click2 =()=>{
        let upper = "";
        setText(upper)
        props.showAlert("Clear...","success")

    

    }

    const click3 =()=>{
        var text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to clipboard","success")

    }
    const click4 =()=>{
       let space = text.split(/[ ]+/)
       setText(space.join(" "))

    }
    const Handle1 =(event)=>{
       setText(event.target.value)
    

    }
    const [text, setText] = useState("");
  
  return (
    <>
<div className= "container" style={{color: props.mode==='dark'? 'white': '#042743'}}>
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={Handle1} style={{backgroundColor:props.mode==='dark'? 'grey': 'white',color:props.mode==='dark'? 'white': '#042743'}} id="mybox" rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={click}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={click1}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={click2}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={click3}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={click4}>Remove Spaces</button>

    <div className="container2 my-2" style={{color: props.mode==='dark'? 'white': '#042743'}}>
        <h1 >Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
        
    </div>
    </>

   
  )
 
}


