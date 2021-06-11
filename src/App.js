import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaCategorias";

class App extends Component {
  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:["Trabalho", "Esportes"]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas
    arrayNotas.splice(index,1)
    this.setState({notas: arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias categorias
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}
//new ListaDeNotas({notas:this.notas})
export default App;
