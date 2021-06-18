export default class Categorias {
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func){
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func);
        console.log(this._inscritos.length)
//filtra todos que nao sao a funcao do objeto de inscritos
    }

    notificar() {
        this._inscritos.forEach(func => { //recebe como parametro a funcao 'func'que vai executar a func()
            func(this.categorias); //pega as novas informacoes da fonte de dados do array de categorias e notifica os inscritos
        });
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria); //add no array a nova categoria pelo push
        this.notificar()
    }
}