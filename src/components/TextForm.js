import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

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
        document.getSelection().removeAllRanges();
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
    
    


    return (
        <>
                <div className='container p-4' style={ {color : props.mode === 'dark' ? 'white':'black'}}>
                <h2 className='mb-3'>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control" style={ {backgroundColor : props.mode === 'dark' ? '#192a4c':'white', color : props.mode === 'dark' ? 'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="7" ></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleRevClick}>Reverse text</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleBoldClick}>Bold</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleItalicClick}>Italic</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUnderlineClick}>Underline</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleNormalClick}>Normal Text</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
                <div className="container my-1 py-2 px-4 " style={ {color : props.mode === 'dark' ? 'white':'black'}}>
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").filter((ele) => {return ele.length!==0}).length} words {text.length} characters</p>
                    <p>{0.008 * text.split(" ").filter((ele) => {return ele.length!==0}).length} Minutes read </p>
                    <h2 className='py-2'>Preview</h2>
                    <p>{text.length > 0 ? text : <i>Nothing to preview!</i>}</p>
                </div>
           
        </>

    )
}
