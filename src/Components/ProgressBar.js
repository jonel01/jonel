import React from 'react';
import { MDBProgress } from 'mdbreact';

    const ProgressBar = ({value, percentage, height, width}) => {
        return(
            <MDBProgress 
                animated
                color="success"
                value={value}
                height={height}
                width={width}
            >
                <h5>{percentage}</h5>
            </MDBProgress>
        )
    }

export default ProgressBar