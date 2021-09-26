import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

export const NoCards = () => {
    return (
        (<div className="nocards-container">
        <Card>
            <CardContent>
                <Typography>
                    No Tasks left to complete, take a breather, or add some new tasks!
                </Typography>
            </CardContent>
        </Card>
    </div>)
    )
}