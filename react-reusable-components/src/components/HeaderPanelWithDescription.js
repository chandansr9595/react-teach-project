import React from 'react';

const HeaderPanelWithDescription = (props) => {
    return (
        <div className={
            props.mainPanelClass ? 
                props.mainPanelClass : "mainPanel"
        }>
            <div className="container">
                <p className={
                    props.headerTextClass ? props.headerTextClass : "header"
                }>
                    { 
                        props.headerText ? props.headerText : "Default Header Text" 
                    }
                </p>
                <p className={
                    props.descriptionTextClass ? props.descriptionTextClass : "body"
                }>
                    { props.descriptionText ?
                        props.descriptionText : 
                        "Here you will get the description which you provide for the popup"
                    }
                </p>
            </div>
        </div>
    )
}

export default HeaderPanelWithDescription;