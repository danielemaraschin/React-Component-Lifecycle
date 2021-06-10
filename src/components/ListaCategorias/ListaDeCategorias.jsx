import React, { Component } from 'react';
import "./estilo.css"

class  ListaDeCategorias extends Component {
    render() { 
        return (
            <section className="lista-categorias">
                <ul>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>
                    <li>Categorias</li>               
                </ul>
                <input type= "text" className="lista-categorias_input"/>
            </section>

        );
    }
}
 
export default ListaDeCategorias;