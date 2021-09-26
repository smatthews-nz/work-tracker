import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './AddTask.css';

export const AddTask = () => {

    const history = useHistory();
    const [title, setTitle] = useState('')
    const [dueDate, setDueDate] = useState('');

    const modalStyle = {
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,.2)",
        color: "##FFF",
        fontSize: "40px",
      };

      const closeAddCardModal = () => {
        history.push('/')
      }

      const handleTitleUpdate = (e) => {
          setTitle(e.target.value)
      }

      const handleDueDateUpdate = (e) => {
          setDueDate(e);
      }

    return createPortal (
        <div style={modalStyle} className="modal">
            <div className="modal-container">
                <h3>Add a new task</h3>
                <div className="card-input-container">
                    <form>
                        <TextField className="add-task-title" id="outlined-basic" label="Title" variant="outlined" value={title} onChange={handleTitleUpdate}/>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Due Date"
                                value={dueDate}
                                onChange={handleDueDateUpdate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </form>
                </div>
                {/* Buttons */}
                <div className="modal-button-container">
                    <Button variant="contained" startIcon={<AddIcon />}>Add Task</Button>
                    <Button variant="contained" style={{backgroundColor: 'red'}} onClick={closeAddCardModal} startIcon={<CancelIcon />}> Cancel</Button>
                </div>
            </div>
        </div>,
        document.getElementById('app-container')
    )
}