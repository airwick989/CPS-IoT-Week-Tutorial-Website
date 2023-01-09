import React from "react";
import { Card, CardContent } from '@mui/material';
import Color from 'color';

function WhiteCard(props){
    return(
        <Card sx={{ 
            display: "inline-block", 
            backgroundColor: Color('#ffffff').alpha(props.transparency).string(),
            marginTop: props.marginTop,
            borderRadius: 5,
        }}
        >
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
}

WhiteCard.defaultProps = {
    marginTop: 10,
    transparency: 0.9,
}

export default WhiteCard;