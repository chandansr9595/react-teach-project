import React from 'react';

const CrossButton = (props) => {
    return (
        <span 
            className="close" 
            onClick={
                (event) => {
                    props.closeHandler && !props.doNotClose && props.closeHandler(event) 
                }
            } 
        />
    )
}

export default CrossButton;