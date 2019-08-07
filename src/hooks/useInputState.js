import { useState } from 'react';
export default initialValue => {
  const [ value, setValue ] = useState(initialValue);
  const updateValue = ({ target }) => {
    setValue(target.value)
  };
  const resetValue = () => {
    setValue("");
  };

  return [value, updateValue, resetValue];
}