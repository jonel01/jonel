import React from 'react';

const Text = ({text, color, fontSize, fontWeight, marginLeft, marginRight, marginTop, marginBottom}) => {
    return(
        
        <p 
            style={{
                color: color, 
                fontSize: fontSize, 
                fontWeight: fontWeight,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
        >
          {text}  
        </p>
    );
}

export default Text