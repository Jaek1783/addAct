import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const InputField = ({
    type,
    value,
    placeholder,
    onChange
})=> {
    return <p className="input"> <input type={type} placeholder={placeholder}
    onChange={onChange}
    value={value}/></p>
};

export default InputField;