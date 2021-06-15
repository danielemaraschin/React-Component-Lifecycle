export default class Categorias{
    constructor() {
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => func ());
    }

    adicionarCategoria(novaCategoria){
        console.log(this.categorias);
        this.categorias.push(novaCategoria); //add no array a nova categoria pelo push
    }
}