import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(){
    let arrayNotas = this.state.notas
    arrayNotas.splice(0,1)
    console.log("DELETADO!!")
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
