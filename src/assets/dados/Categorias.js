export default class Categorias{
    constructor() {
        this.categorias = [];
        this.inscritos = [];
    }

    adicionarCategoria(novaCategoria){
        console.log(this.categorias);
        this.categorias.push(novaCategoria); //add no array a nova categoria pelo push
    }
}