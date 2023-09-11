import Recipe from "../features/recipes/Recipe";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Recipes({state, dispatch}){
    const recipes = state.recipes;
    const navigate = useNavigate();

    const goHome = () => {
        navigate({
            pathname: '/'
        })
    }

    return(
        <Container>
            <Row className="justify-content-center mb-4">
                <Col className="text-center" md={12}>
                    <h1>Recipes</h1>
                </Col>
            </Row>
            <Row xs={1} md={2} className="justify-content-center g-4">
                {recipes.map((recipe, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <Recipe title={recipe.title} image={recipe.image} missedCount={recipe.missedIngredientCount}/>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4 mb-4">
                <Button onClick={goHome}>GO BACK</Button>
            </Row>
        </Container>
    );
}

export default Recipes;