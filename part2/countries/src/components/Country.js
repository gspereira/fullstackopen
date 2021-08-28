import React from "react";

const Country = ({ data }) => {
  return (
    <div>
      {data.name}
      <button>Show</button>
    </div>
  );
}
 
export default Country;