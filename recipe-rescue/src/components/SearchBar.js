import { Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { addIngredient } from '../features/ingredients/ingredientsSlice';

function SearchBar({state, dispatch}){
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleClick = (event) => {
        dispatch(addIngredient(inputText));
        setInputText('');
    }

    return(
        <div className='search-bar'>
            <input 
                type='text' 
                placeholder='Type in ingredients...' 
                value={inputText} 
                onChange={handleChange}
                style={{marginRight: '10px', padding: '5px'}}
            />
            <Button variant="success" size='sm' onClick={handleClick} disabled={!inputText}>Add</Button>
        </div>
    );
}

export default SearchBar;