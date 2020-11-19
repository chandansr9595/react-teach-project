import React, {useState} from 'react';

import CrossButton from '../buttons/CrossButton';
import HeaderPanelWithDescription from '../HeaderPanelWithDescription';
import TwoButtonsPanel from '../buttons/TwoButtonsPanel';
import '../Common.css';

const ConfirmationPopup = (props) => {

    const [primarySpinner, setPrimarySpinner] = useState(false);
    const [secondarySpinner, setSecondarySpinner] = useState(false);

    const handlerClick = (event, callback) => {
        event.stopPropagation();
        callback && callback();
    }

    const getTwoButtonsPanel = () => {
        return (
            props.customButtonsPanel ? (
                    Array.isArray(props.children) ? 
                        props.children[props.buttonsPanelIndex] : props.children
                ) : 
                <TwoButtonsPanel
                    onlyPrimaryButton={props.onlyPrimaryButton}
                    buttonsPanelClass={props.buttonsPanelClass}
                    buttonsPanelHeight={props.buttonsPanelHeight}
                    buttonsPanelBackground={props.buttonsPanelBackground}
                    
                    primaryClickHandler={props.primaryClickHandler}
                    primaryButtonClass={props.primaryButtonClass}
                    primaryButtonText={props.primaryButtonText}
                    primaryButtonWidth={props.primaryButtonWidth}
                    onClickPrimaryText={props.onClickPrimaryText}

                    secondaryClickHandler={props.secondaryClickHandler}
                    secondaryButtonClass={props.secondaryButtonClass}
                    secondaryButtonText={props.secondaryButtonText}
                    
                    primarySpinner={primarySpinner}
                    setPrimarySpinner={setPrimarySpinner}
                    showPrimarySpinner={props.showPrimarySpinner}
                    primarySpinnerBackgroundColor={props.primarySpinnerBackgroundColor}

                    secondarySpinner={secondarySpinner}
                    setSecondarySpinner={setSecondarySpinner}
                    showSecondarySpinner={props.showSecondarySpinner}
                    secondarySpinnerBackgroundColor={props.secondarySpinnerBackgroundColor}
                />
        )
    }

    const getMainHeaderPanel = () => {
        return (
            props.customMainPanel ? (
                Array.isArray(props.children) ? 
                    props.children[props.mainPanelIndex] : props.children
            ) :
            <HeaderPanelWithDescription 
                mainPanelClass={props.mainPanelClass}
                headerText={props.headerText}
                headerTextClass={props.headerTextClass}
                descriptionText={props.descriptionText}
                descriptionTextClass={props.descriptionTextClass}
            />
        );
    }

    const getPopupPanel = () => {
        return (
            <div className="popupPanel" 
                style={{
                    width: props.width ? props.width : "500px", 
                    height: props.height ? props.height : "200px"
                }} 
                onClick={(event) => handlerClick(event)}
            >
                { props.close && (
                    <CrossButton 
                        doNotClose={secondarySpinner || primarySpinner} 
                        closeHandler={props.closeHandler} 
                    /> ) 
                }
                { getMainHeaderPanel() }
                { getTwoButtonsPanel() }
            </div>
        )
    }

    return (
        <div className="coverEntierPage" 
            onClick={
                (event) => !(secondarySpinner || primarySpinner) && handlerClick(event, props.outerCloseHandler) 
            } 
        >
            {getPopupPanel()}
        </div>
    );
}

export default ConfirmationPopup;