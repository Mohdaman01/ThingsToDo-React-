import axios from 'axios'
import '../assets/list.css'


function List(props) {

    const list = props.list
    const setRender = props.setRender;
    const api = props.api

    async function deleteListHandler(id){

        await axios.delete(`${api}/delete-list`,{
            params : {
                id
            }
        });

        setRender(true);

    }

    return (

        <div className='list-container'>
                <div id="info">

                    <p>{list.description}</p>
                    <p>{list.date}</p>

                </div>

                <div id="cataegory">{list.category}</div>

                <div id="delete" className="btn delete-list" onClick={()=>deleteListHandler(list._id)}>Delete Task</div>

        </div>

    )

}

export default List;