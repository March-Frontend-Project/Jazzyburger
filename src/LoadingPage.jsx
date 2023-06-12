import React from "react";

const LoadingPage = () => {
  return (
    <div className="loader">
      <div class="spinner-border text-black" role="status" style={{width:"100px", height:"100px"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
      <div className="loading-txt">Loading...</div>
    </div>
  );
};

export default LoadingPage;
