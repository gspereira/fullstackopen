import React from 'react'

const Filter = ({ value, handle }) => {
  return (
    <form>
      <div>
        filter shown with <input value={value} onChange={handle} />
      </div>
    </form>
  );
}
 
export default Filter;