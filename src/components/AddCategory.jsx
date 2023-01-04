import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = (e) => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
    if ( inputValue.trim().length <= 1 ) return

    onNewCategory( inputValue.trim() )
    // setCategories( (category) =>  [inputValue, ...category] )
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        onChange={onInputChange}
        value={inputValue}
        type="text" 
        placeholder='buscar gifs' 
        />
    </form>
  )
}

export default AddCategory