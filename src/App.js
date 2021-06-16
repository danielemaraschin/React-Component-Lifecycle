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
            categorias={this.categorias}
            criarNota={this.notas.criarNota} />
          <main className="conteudo-principal">
            <ListaDeCategorias
              adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} //this.categoria pq eh so referente a esse atributo e nao a classe inteira
              categorias={this.categorias} />
            <ListaDeNotas
              apagarNota={this.notas.apagarNota}
              notas={this.notas} />
          </main>
        </section>
      );
    }
  }
  //new ListaDeNotas({notas:this.notas})
  export default App;
