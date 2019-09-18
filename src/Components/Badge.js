import React from 'react';
import { MDBBadge } from 'mdbreact'

const Badge = ({text, onClickBadge, styles}) => {
    return(
        <MDBBadge
            onClick={onClickBadge}
            style={styles}
        >
            {text}
        </MDBBadge>
    )
}

export default Badge

