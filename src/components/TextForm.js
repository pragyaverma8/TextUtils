import React, { useState, useSyncExternalStore } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(' ');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleRevClick = () => {
        let splitWord = text.split("");

        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords;
        props.showAlert("Text Reversed!", "success");
        setText(newText);
    }

    const handleBoldClick = () => {
        document.querySelector('#myBox').style.fontWeight = "bold";
        props.showAlert("Converted to Bold!", "success");
    }

    const handleItalicClick = () => {
        document.querySelector('#myBox').style.fontStyle = "italic";
        props.showAlert("Converted to Italic!", "success");
    }

    const handleUnderlineClick = () => {
        document.querySelector('#myBox').style.textDecoration = "underline";
        props.showAlert("Text Underlined!", "success");
    }

    const handleNormalClick = () => {
        document.querySelector('#myBox').style.fontWeight = "normal";
        document.querySelector('#myBox').style.fontStyle = "normal";
        document.querySelector('#myBox').style.textDecoration = "none";
        props.showAlert("Bold/ Italic/ Underline removed!", "success");
    }

    const handleCopy = () => {
        var text =document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const words = (text) => {
        let words = text.trim().split(" ").length;
        if (words === 1 && text.split(" ")[0] === "") {
          words = 0;
          return words;
        } else {
          return words;
        }
      }
    
    


    return (
        <>
                <div className='container p-4' style={ {color : props.mode === 'dark' ? 'white':'black'}}>
                <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={ {backgroundColor : props.mode === 'dark' ? '#0c1933':'white', color : props.mode === 'dark' ? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
                    </div>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleRevClick}>Reverse text</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleBoldClick}>Bold</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleItalicClick}>Italic</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleUnderlineClick}>Underline</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleNormalClick}>Normal Text</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="container my-1 py-3 px-5 " style={ {color : props.mode === 'dark' ? 'white':'black'}}>
                    <h2>Your text summary</h2>
                    <p>{words(text)} words {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read </p>
                    <h2 className='py-2'>Preview</h2>
                    <p>{text.length > 0 ? text : <i> Enter something in the textarea to preview it here</i>}</p>
                </div>
           
        </>

    )
}
