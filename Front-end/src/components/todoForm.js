import { useState} from 'react';
import '../assets/todoForm.css';
import axios from 'axios';

function TodoForm(props) {

    const setRender = props.setRender;
    const api = props.api;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(getDate());
    const [description, setDescription] = useState('');
 
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${year}-${month}-${date}`;
    }

    async function formHandler(e) {

        e.preventDefault();

        axios.post(`${api}/create-list`, {
            category: title,
            description,
            date
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        setTitle('');
        setDate(getDate());
        setDescription('');
        setRender(true);
    }

    return (

        <div className='form-container'>
            <form onSubmit={(e) => formHandler(e)} >

                <div className="info-container">

                    <input type="text" maxLength={20} name="category" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Topic" required />
                    <input className="input" type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

                </div>

                <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="5" placeholder="Description" required></textarea>

                <button type="submit" className="btn add-list">Add Task</button>

            </form>
        </div>

    )

}

export default TodoForm;