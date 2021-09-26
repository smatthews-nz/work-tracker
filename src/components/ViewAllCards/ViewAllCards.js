import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { NoCards } from '../NoCards/NoCards';


export const ViewAllCards = (props) => {

    const history = useHistory();

    const [cards, setCards] = useState([]);

    const toggleAddCardModal = () => {
        history.push(`/add`)
    }

    return (
        <div className="app-container" id="app-container">
            <div className="button-row">
                <Button variant="contained" onClick={toggleAddCardModal} startIcon={<AddIcon />}>Add Task</Button>
                <Button variant="contained" style={{backgroundColor: 'violet'}}>Login</Button>
            </div>
        <div className="card-container">
            {cards.length === 0 && <NoCards /> }
        </div>
        </div>

    )
}