import React,{useState} from 'react'


export default function TextArea(props) {
    const [text,setText] = useState("");

    const HandleUpClick  = () =>{
        console.log(text)
        setText(text.toUpperCase())
        props.showAlert("Text converted to upper case","success")

    } 
    const HandleRepeatClick  = () =>{
     
      setText(text.repeat(2));
      props.showAlert("Text repeated","success")

  } 
    const HandleLoClick  = () =>{
      console.log(text)
      setText(text.toLowerCase())
      props.showAlert("Text converted to lower case","success")

  } 
    const onChangeHandler  = (event) =>{
        setText(event.target.value);

    } 
    

  return ( 
    <>   
    <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myText" value={text} onChange={onChangeHandler} style={{color: props.mode === 'dark'?'white':'black', backgroundColor: props.mode === 'dark'? '#212529e3':'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={HandleRepeatClick}>Repeat Text</button>

    </div>
    <div className='container my-3'>
      <h2>Words Count</h2>
      <p>{text.split(" ").length} words and {text.length} chracters</p>
      <p>{0.008 * text.split(" ").length}  minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
