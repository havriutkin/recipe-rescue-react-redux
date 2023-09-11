import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeIngredient } from '../features/ingredients/ingredientsSlice';

function Ingredient(props){
    const {name, state, dispatch} = props;

    const handleClick = () => {
        dispatch(removeIngredient(name));
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant='danger' size='sm' onClick={handleClick}>X</Button>
            </Card.Body>
        </Card>
    )
}

export default Ingredient;