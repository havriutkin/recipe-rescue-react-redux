import Card from "react-bootstrap/Card";

function Recipe(props){
    const {title, image, missedCount} = props;

    return(
        <Card style={{ width: '18rem', height: '22rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Missed ingredients count: {missedCount}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Recipe;