import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({ setCategories }) {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputValue) return;
        setCategories( cats => [inputValue, ...cats])
        setinputValue('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}


export default AddCategory

