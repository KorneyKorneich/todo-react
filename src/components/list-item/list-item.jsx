import React from "react";
import "./list-item.scss"

const ListItem = ({item, handlerDel, handlerImp, handlerDone}) => {
   let classNames = "todo_item";

    if(item.isImportant){
        classNames += " important";
    }
    if(item.isDone) {
        classNames += " done";
    }

    const handleImp = (obj) => {
        handlerImp(obj);
    };

    const handleDel = (obj) => {
        handlerDel(obj);
    };
    const handleDone = (obj) => {
        handlerDone(obj);
    };

    return(
        <li className={classNames}>
            <span onClick={() => handleDone(item)}>{item.label}</span>
            <button onClick={() => handleImp(item)}>!</button>
            <button onClick={() => handleDel(item)}>Del</button>
        </li>
    )
};

export default ListItem;