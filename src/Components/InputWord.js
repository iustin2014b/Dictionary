export default function InputWord(props) {
    return (
        <div>             
                <div className ='mainDiv' >
                    <input name = "inputBox" id = "inputBox"  type = "text" onChange = {props.onChange} />
                    <button id ="button" onClick = {props.onClick}>Add</button>
                </div>                        
        </div>
    );
  }
 