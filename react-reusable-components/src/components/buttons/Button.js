import React from 'react';

export const SpinnerAnimationSVG = ({width, height, backgroundColor}) => {
  const viewBoxSize = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBoxSize}
      fill="none"
      transform-box="fill-box"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.63565 2.28825C2.35955 2.29307 2.13964 2.5208 2.14446 2.7969C2.14928 3.073 2.37701 3.29291 2.65311 3.2881C2.92921 3.28328 3.14912 3.05555 3.1443 2.77945C3.13948 2.50335 2.91175 2.28343 2.63565 2.28825Z"
        fill={backgroundColor}
      />
      <path
        d="M5.40032 0.239686C5.069 0.245469 4.8051 0.518746 4.81089 0.850066C4.81667 1.18139 5.08995 1.44529 5.42127 1.4395C5.75259 1.43372 6.01649 1.16044 6.0107 0.829123C6.00492 0.497803 5.73164 0.233902 5.40032 0.239686Z"
        fill={backgroundColor}
      />
      <path
        d="M8.79806 0.0803632C8.41152 0.0871103 8.10364 0.405932 8.11038 0.792473C8.11713 1.17901 8.43595 1.4869 8.82249 1.48015C9.20903 1.4734 9.51692 1.15458 9.51017 0.76804C9.50342 0.381499 9.1846 0.0736161 8.79806 0.0803632Z"
        fill={backgroundColor}
      />
      <path
        d="M11.5326 2.03294C11.0908 2.04065 10.7389 2.40502 10.7466 2.84678C10.7543 3.28854 11.1187 3.6404 11.5605 3.63269C12.0022 3.62498 12.3541 3.26061 12.3464 2.81885C12.3387 2.37709 11.9743 2.02523 11.5326 2.03294Z"
        fill={backgroundColor}
      />
      <path
        d="M12.5865 5.11501C12.0895 5.12369 11.6937 5.5336 11.7023 6.03058C11.711 6.52756 12.1209 6.92341 12.6179 6.91474C13.1149 6.90606 13.5107 6.49615 13.5021 5.99917C13.4934 5.50219 13.0835 5.10634 12.5865 5.11501Z"
        fill={backgroundColor}
      />
      <path
        d="M11.539 8.13375C10.9316 8.14436 10.4478 8.64536 10.4584 9.25278C10.469 9.8602 10.97 10.344 11.5774 10.3334C12.1848 10.3228 12.6687 9.82181 12.6581 9.21439C12.6475 8.60697 12.1464 8.12315 11.539 8.13375Z"
        fill={backgroundColor}
      />
      <path
        d="M8.77261 10.0823C8.10997 10.0939 7.58217 10.6404 7.59374 11.3031C7.60531 11.9657 8.15186 12.4935 8.8145 12.482C9.47714 12.4704 10.0049 11.9238 9.99337 11.2612C9.98181 10.5986 9.43526 10.0708 8.77261 10.0823Z"
        fill={backgroundColor}
      />
      <path
        d="M5.36964 9.9417C4.65178 9.95423 4.08 10.5463 4.09253 11.2642C4.10506 11.9821 4.69716 12.5538 5.41502 12.5413C6.13288 12.5288 6.70466 11.9367 6.69213 11.2188C6.6796 10.501 6.0875 9.92917 5.36964 9.9417Z"
        fill={backgroundColor}
      />
      <path
        d="M2.6334 7.88914C1.86032 7.90263 1.24456 8.54028 1.25805 9.31336C1.27154 10.0864 1.90919 10.7022 2.68227 10.6887C3.45535 10.6752 4.07112 10.0376 4.05762 9.26449C4.04413 8.49141 3.40648 7.87565 2.6334 7.88914Z"
        fill={backgroundColor}
      />
      <path
        d="M1.57596 4.6071C0.747662 4.62155 0.0879119 5.30474 0.10237 6.13305C0.116828 6.96135 0.800019 7.6211 1.62832 7.60664C2.45662 7.59218 3.11637 6.90899 3.10191 6.08069C3.08746 5.25239 2.40426 4.59264 1.57596 4.6071Z"
        fill={backgroundColor}
      />
    </svg>
  );
};

const Button = (props) => {

    console.log('showSpinner : ' , props.showSpinner);
    console.log('spinner : ' , props.spinner);
    console.log('setSpinner : ' , props.setSpinner);

    const handlerButtonClick = (event, callBack) => {
        props.showSpinner && props.setSpinner && props.setSpinner(true);
        callBack && callBack(event);
    }

    return (
        <button className={ props.buttonClass ? props.buttonClass : "" }
            onClick={(event) => !props.closeSpinner && handlerButtonClick(event, props.clickHandler) }
            style={{minWidth: props.width}}
        >
            {props.spinner && props.showSpinner && props.setSpinner && (
                <div className="spinnerClass">
                    <SpinnerAnimationSVG backgroundColor={props.spinnerBackgroundColor} width="14" height="13"/>
                </div>
            )}
            {props.onClickPrimaryText && props.spinner ? 
                props.onClickPrimaryText : 
                ( props.buttonText ? props.buttonText : "Button" )
            }
        </button>
    )
}

export default Button;