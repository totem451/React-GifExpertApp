import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        console.log(e.target.value);
        setInputValue(e.target.value);

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log('Submit hecho');

        if (inputValue.trim().length > 0) {

            // setCategorias(c => [...c, inputValue]);
            setCategorias(c => [inputValue, ...c]);
            setInputValue(' ');

        }

    };

    return (

        <>

            <p>{inputValue}</p>
            <h1>Add Category</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = 'text'
                    value = {inputValue}
                    onChange = {handleInputChange}
                />
            </form>

        </>

    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}