import React, { Component } from 'react';
import "./estilo.css";

//nossa lista de categorias não se importa com o estado, ela so usa elementos que foram passado para ela como props e desenha o que foi solicitado
class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state =  {categorias: []}
    }
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias.bind(this));
    }

    componentWillUnmount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }  
    }

    _novasCategorias(categorias) {              
        this.setState({...this.state, categorias}) //muda o estado para estado antigo+ novas categorias
    }
    _handleEventoInput(e) { //"e" é o evento
        if (e.key == "Enter") {
            let valorCategoria = e.target.value; //target value vai pegar o valor do evento que eh o valor add no input
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categorias_item">{categoria}</li>
                    })}
                </ul>
                <input type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;