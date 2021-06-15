export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notificar() {
        this._inscritos.forEach(func => { //recebe como parametro a funcao 'func'que vai executar a func()
            func(this.categorias); //pega as novas informacoes da fonte de dados do array de categorias e notifica os inscritos
        });
    }


    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);

    }

    apagarNotas(indice){
        this.notas.splice(indice, 1);
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}