import React from "react";
import ListItem from "../list-item";
const ItemsList = ({items, handlerDel, handlerImp, handlerDone}) => {


console.log(items);
    return(
        <ul>
            {items.map((item) => {
                return(
                    <ListItem
                        key={item.id}
                        item={item}
                        handlerDel = {handlerDel}
                        handlerImp = {handlerImp}
                        handlerDone={handlerDone}
                    />
                )
            })}
        </ul>
    );
};

export default ItemsList;