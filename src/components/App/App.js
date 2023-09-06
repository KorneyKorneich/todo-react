import './App.scss';
import ItemsList from "../items-list";
import InputField from "../input-field";
import {useState} from "react";
function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
    const handleAddTask = (value) => {
        const newTask = {
            label: value,
            id: id,
            isImportant: false,
            isDone:false,
        };
        setId(id + 1);
        setItems([...items, newTask]);
    };

    const handleDelTask = (item) =>{
        setItems(items.filter((el => el.id !== item.id)));
    };

    const handleImpTask = (obj) => {
        const itemsWithImp = items.map(el => el.id === obj.id ? {...el, isImportant: !el.isImportant} : el);
        const importantItems = itemsWithImp.filter(item => item.isImportant);
        const notImportantItems = itemsWithImp.filter(item => !item.isImportant).sort((a, b) => a.id - b.id);
        setItems([...importantItems, ...notImportantItems]);
    };

    const handleDoneTask = (obj) => {
        const withDoneItems = items.map(el => el.id === obj.id ? {...el, isDone: !el.isDone} : el);
        const doneItems = withDoneItems.filter(item => item.isDone);
        const notDoneItems = withDoneItems.filter(item => !item.isDone);
        setItems([...notDoneItems, ...doneItems]);
    };



    return (
      <div className="App">
          <ItemsList items = {items}
                     handlerDel = {handleDelTask}
                     handlerImp = {handleImpTask}
                     handlerDone={handleDoneTask}
          />
          <InputField handler = {handleAddTask}/>
      </div>
  );
}

export default App;
