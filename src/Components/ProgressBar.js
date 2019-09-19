import React from 'react';
import { MDBProgress } from 'mdbreact';

    const ProgressBar = ({value, percentage, height}) => {
        return(
            <MDBProgress 
                value={value}
                height={height}
            >
                <h5>{percentage}</h5>
            </MDBProgress>
        )
    }

export default ProgressBar