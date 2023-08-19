import TodoForm from "./todoForm";
import List from './list';
import { useEffect, useState } from "react";
import axios from "axios";
 

function App() {

  const [lists, setLists] = useState([]);
  const [render, setRender] = useState(false);
  const api = 'https://thingstodoserver.onrender.com'
   

  useEffect(() => {

    (async () => {

      try {

        const { data } = await axios.get(`${api}/get-lists`, {

          signal: AbortSignal.timeout(5000)

        });

        if (data) {

          setLists(data.data.lists);
          setRender(false);
  
        }

        return;

      } catch (err) {

        console.log(err.message);

        return;

      }


    })();

  }, [render]);


  return (
    <div className="App">
      <h1 className="text-center heading">Things ToDo</h1>
      <TodoForm setRender={setRender} api={api} />
      {lists.map((list) => (
        <List list={list} key={list._id} setRender={setRender}  api={api} />
      ))}

    </div>
  );

}

export default App;
