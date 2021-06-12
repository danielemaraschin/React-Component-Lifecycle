import React, { Component } from 'react';
import "./estilo.css";

class  ListaDeCategorias extends Component {
    _handleEventoInput(e){
        console.log(e.key)
        if(e.key == "Enter"){
            console.log("adicionar categoria")
        }
    }

    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        <li className="lista-categorias_item">Categorias</li> 
                    })}              
                </ul>
                <input type= "text" 
                    className="lista-categorias_input" 
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>

        );
    }
}
 
export default ListaDeCategorias;