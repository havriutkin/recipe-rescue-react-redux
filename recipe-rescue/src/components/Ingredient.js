function Ingredient(props){
    const {name} = props;

    return (
        <div className="ingredient">
            <h3>{name}</h3>
        </div>
    )
}

export default Ingredient;