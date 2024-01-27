import React from "react";
const Todo = ({ id, title, body, delNote }) => {
    return (
        <>
            
            <div className="note">
                <h4 className="note-title">{title}</h4>
                <div className="note-desc">{body}</div>
                <div className="del-btn"><button class="btn" onClick={()=>delNote(id)}>Delete</button></div>
            </div>
        </>
    );
};

export default Todo;