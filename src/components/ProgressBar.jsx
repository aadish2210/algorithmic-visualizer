import React, { forwardRef } from "react";

const ProgressBar = forwardRef((props, ref) => {
  
  return (
    <div className="progress mb-3 mt-2" role="progressbar" style={{height : "30px"}}>
        <div className="progress-bar bg-dark" ref={ref}></div>
    </div>
  )

});

export default ProgressBar

/*
// ProgressBar.jsx





const ProgressBar = forwardRef((props, ref) => {
  return <div ref={ref} className="progress-bar"></div>;
});

export default ProgressBar;

*/