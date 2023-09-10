import SearchBar from "../components/SearchBar";
import Ingredient from "../components/Ingredient";

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home({state, dispatch}){
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="text-center" md={12}>
                    <h1>Recipe Rescue</h1>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={12} className="text-center">
                    <SearchBar state={state} dispatch={dispatch}/>
                </Col>
            </Row>
            <Row>
                {state.ingredients.map((name, index) => {
                    return (
                        <Col key={index} md={2}>
                            {name}
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default Home;