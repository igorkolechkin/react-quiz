import React from 'react';

const Select = props => (
  <React.Fragment>
    {
      props.label
        ? <label htmlFor="answer-select">{ props.label }</label>
        : null
    }

    <select
      id="answer-select"
      value={ props.value }
      onChange={ props.onChange }
    >
      {
        props.options.map((option, index) => {
          return (
            <option
              key={ index }
              value={ option.value }
            >
              { option.text }
            </option>
          )
        })
      }
    </select>
  </React.Fragment>
);

export default Select;
