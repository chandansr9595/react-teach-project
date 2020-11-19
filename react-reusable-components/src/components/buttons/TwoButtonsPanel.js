import React from 'react';
import Button from './Button';

const TwoButtonsPanel = (props) => {
    return (
        <div className={
            props.buttonsPanelClass ? 
                props.buttonsPanelClass : "buttonsPanel"
        } style={{
            minHeight: props.buttonsPanelHeight, 
            background: props.buttonsPanelBackground
        }}>
            {
                !props.onlyPrimaryButton && (
                    <Button 
                        buttonClass={
                            props.secondaryButtonClass ? 
                                props.secondaryButtonClass : "secondary-button-class"
                            }
                        clickHandler = {props.secondaryClickHandler}
                        buttonText = {props.secondaryButtonText}

                        spinner={props.secondarySpinner}
                        setSpinner={props.setSecondarySpinner}
                        showSpinner={props.showSecondarySpinner}
                        closeSpinner={props.secondarySpinner || props.primarySpinner}
                        spinnerBackgroundColor={props.secondarySpinnerBackgroundColor}
                    />
                )
            }
            <Button 
                buttonClass={
                    props.primaryButtonClass ? 
                        props.primaryButtonClass : "primary-button-class"
                    }
                clickHandler={props.primaryClickHandler}
                buttonText={props.primaryButtonText}
                width={props.primaryButtonWidth}
                onClickPrimaryText={props.onClickPrimaryText}

                spinner={props.primarySpinner}
                setSpinner={props.setPrimarySpinner}
                showSpinner={props.showPrimarySpinner}
                closeSpinner={props.secondarySpinner || props.primarySpinner}
                spinnerBackgroundColor={props.primarySpinnerBackgroundColor}
            />
        </div> 
    );
}

export default TwoButtonsPanel;