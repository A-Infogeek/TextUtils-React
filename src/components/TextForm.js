import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }

    const handleOnChange = (event) => {
        // console.log("onChange was clicked");
        setText(event.target.value);
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!","success");
    }

    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared!","success");
    }

    const handleRemoveExtraSpace = () => {
        const newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#042743',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text </button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text </button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Enter your text in the above textarea to preview it..."}</p>
            </div>
        </>
    )
}
