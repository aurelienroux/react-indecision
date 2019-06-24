import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>
        Remove all
      </button>
      {props.options.length === 0 && <p>Please add an option</p> }
      <ul>
        {props.options.map((option, index) => (
          <Option 
            key={index} 
            text={option} 
            handleDeleteOption={props.handleDeleteOption} 
          />
        ))}
      </ul>
    </div>
  )
}

export default Options;