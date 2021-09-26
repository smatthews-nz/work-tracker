import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';

export const AddCard = () => {

    const history = useHistory();

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

    return createPortal (
        <div style={modalStyle} className="modal">
            <div className="modal-container">
                <h3>Add a new task</h3>
                <div className="card-input-container">
                    
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