import React from "react";

const ErrorMessage = ({ errorMessage, messageType }) => {
  return (
    <div className={messageType ? 'positive' : 'negative'}>
      <h1>{errorMessage}</h1>
    </div>
  );
}
 
export default ErrorMessage;