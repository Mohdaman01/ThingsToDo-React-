import TodoForm from "./todoForm";
import List from './list';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [lists, setLists] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {

    (async () => {

      try {

        const { data } = await axios.get('http://localhost:8000/get-lists', {

          signal: AbortSignal.timeout(5000)

        });

        if (data) {

          setLists(data.data.lists);
  
        }

        return;

      } catch (err) {

        console.log(err.message);

        return;

      }


    })();

    setRender(false);

  }, [render]);


  return (
    <div className="App">
      <h1 className="text-center heading">Things ToDo</h1>
      <TodoForm setRender={setRender} />
      {lists.map((list) => (
        <List list={list} key={list._id} setRender={setRender} />
      ))}

    </div>
  );

}

export default App;
