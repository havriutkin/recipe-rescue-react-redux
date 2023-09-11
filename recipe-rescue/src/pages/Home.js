import SearchBar from "../components/SearchBar";
import Ingredient from "../components/Ingredient";

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";

function Home({state, dispatch}){
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center" md={12}>
                    <h1>Recipe Rescue</h1>
                </Col>
                <Col md={3}></Col>
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
                <Button variant="primary" size="lg" disabled={state.ingredients.length == 0}>FIND RECIPE</Button>
            </Row>
        </Container>
    );
}

export default Home;