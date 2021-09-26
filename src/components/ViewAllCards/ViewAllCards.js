import React, {useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const ViewAllCards = () => {

    const [cards, setCards] = useState([]);

    return (
        <div className="card-container">
            <div className="button-row">
                <Button variant="contained" startIcon={<AddIcon />}>Add Task</Button>
                <Button variant="contained">Login</Button>
            </div>
        </div>

    )
}