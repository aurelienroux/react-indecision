import React from 'react';

const Option = (props) => (
  <li>
    Option: {props.text}
    <button 
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.text)
      }}
    >
      remove
    </button>
  </li>
)

export default Option;