import "./PokemonCard.css"
import React from "react";
class PokemonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {hp: 0}
    }

    componentDidMount(){
        this.setState({hp: this.props.pokemonHP})
    }
    render(){
        let types = this.props.pokemonType.map(function(type){
            return <span className={`pokemonCard__type pokemonCard__type--${type}`}>{type}</span>
        });
    
        return (
            <article className="pokemonCard">
                <header className="pokemonCard__header">
                    <h2 className="pokemonCard__title">{this.props.pokemonName}</h2>
                    <div className="pokemonCard__labelWrapper">
                        {types}
                    </div>
            
                </header>
                <section className="pokemonCard__section">
                    <figure className="pokemonCard__figure">
                        <img src={this.props.pokemonImage} alt="" className="pokemonCard__img"></img>
                    </figure>
                    <div className="pokemonCard__h3Wrapper">
                        <h3 className="pokemonCard__HP">{this.state.hp}</h3>
                    </div>
                </section>
                <footer className="pokemonCard__footer">
                <button className="pokemonCard__button pokemonCard__button--attack">Attack</button>
                <button className="pokemonCard__button pokemonCard__button--catch">Catch</button>
                </footer>
             
            </article>
           );
            
    }
   
  
}

export default PokemonCard;