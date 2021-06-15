import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaCategorias";
import Categorias from "./assets/dados/Categorias";

//nosso app é stateful, recebe os estados
class App extends Component {
  constructor() {
    super();

    render(){
      return (
        <section className="conteudo">
          <FormularioCadastro
            categorias={this.state.categorias}
            criarNota={this.criarNota.bind(this)} />
          <main className="conteudo-principal">
            <ListaDeCategorias
              adicionarCategoria={this.adicionarCategoria.bind(this)}
              categorias={this.state.categorias} />
            <ListaDeNotas
              apagarNota={this.deletarNota.bind(this)}
              notas={this.state.notas} />
          </main>
        </section>
      );
    }
  }
  //new ListaDeNotas({notas:this.notas})
  export default App;
