import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategorias from "./components/ListaCategorias";
import Categorias from "./assets/dados/Categorias";
import ArrayDeNotas from "./assets/dados/ArrayDeNotas";

//nosso app é stateful, recebe os estados
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias;
    this.notas = new ArrayDeNotas;
  }

    render(){
      return (
        <section className="conteudo">
          <FormularioCadastro
            categorias={this.categorias.categorias}
            criarNota={this.criarNota.bind(this)} />
          <main className="conteudo-principal">
            <ListaDeCategorias
              adicionarCategoria={this.categorias.adicionarCategoria}
              categorias={this.categorias.categorias} />
            <ListaDeNotas
              apagarNota={this.apagarNota}
              notas={this.state.notas} />
          </main>
        </section>
      );
    }
  }
  //new ListaDeNotas({notas:this.notas})
  export default App;
