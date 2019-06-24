import React from 'react';

const Option = (props) => {
  return (
    <li>
      Option: {props.text}
      <button 
        onClick={() => {
          props.handleDeleteOption(props.text)
        }}
      >
        remove
      </button>
    </li>
  )
}

export default Option;