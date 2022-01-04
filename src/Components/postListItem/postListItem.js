import React from 'react';
import "./postListItem.css";

const PostListItem = ({item, onToggleDone}) => {

    let className = item.isDone === "true" ? " done" : "";
    let checkboxDone = item.isDone === "true" ? " doneCheckbox" : "checkbox";

    return (
        <span
            className="item-container"
        >
            <div className="post-list-checkbox" ><input type="checkbox" className={checkboxDone} onClick={() => onToggleDone(item.id)}/></div>
            <div>
                <div className={`${className} item-label`}>{item.label}</div>
                    <div className={`${className} item-description`}>{item.description}</div>
            </div>
        </span>
    );
};

export default PostListItem;