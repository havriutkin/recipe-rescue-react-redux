import SearchBar from "../components/SearchBar";
import Ingredient from "../components/Ingredient";

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import { loadRecipes } from "../features/recipes/recipesSlice";
import { useNavigate } from "react-router-dom";
import { clearIngredients } from "../features/ingredients/ingredientsSlice";
import config from "../config";

function Home({state, dispatch}){
    const navigate = useNavigate();
    const handleClick = () => {
        // Make http request
        const ingredientsString = state.ingredients.join(', ');
        const params = new URLSearchParams({
            apiKey: config.apiKey,
            ingredients: ingredientsString,
            ranking: 2
        });
        const apiURL = `https://api.spoonacular.com/recipes/findByIngredients?${params}`;

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                dispatch(loadRecipes(data));
                dispatch(clearIngredients());
                navigate({
                    pathname:'/recipes'
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center" md={12}>
                    <h1>Recipe Rescue</h1>
                </Col>
            </Row>

            <Row className="justify-content-center mt-5">
                <Col md={12} className="text-center">
                    <SearchBar state={state} dispatch={dispatch}/>
                </Col>
            </Row>

            <Row className="mt-5">
                {state.ingredients.map((name, index) => {
                    return (
                        <Col key={index} md={4} className="mt-3">
                            <Ingredient name={name} state={state} dispatch={dispatch}/>
                        </Col>
                    )
                })}
            </Row>
            <Row className="mt-5">
                <Button variant="primary" size="lg" disabled={state.ingredients.length == 0} onClick={handleClick}>FIND RECIPE</Button>
            </Row>
        </Container>
    );
}

export default Home;