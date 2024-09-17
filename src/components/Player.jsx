import {useState} from "react";

export default function Player({initialName,symbol , isActive}){
    const[playerName,setPlayerName] = useState(initialName);
    const [isEditing , setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing(!isEditing);
       
    }

    function handleChange(event){
      setPlayerName(event.target.value);
    }

    let btnCaption = "Edit";
    let editPlayerName =  <span className = "player-name">{playerName}</span>
    if (isEditing){
      editPlayerName = <input type = "text" required value = {playerName} onChange={handleChange} />
      btnCaption = "Save";
    }
    return (
        <li className = {isActive? 'active':undefined}>
        <span className="player">
          {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick = {handleEditClick}>{btnCaption}</button>
      </li>
    );
}