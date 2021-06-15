export default class Categorias{
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(){
        this._inscritos.push(func);
    }

    adicionarCategoria(novaCategoria){
        console.log(this.categorias);
        this.categorias.push(novaCategoria); //add no array a nova categoria pelo push
    }
}