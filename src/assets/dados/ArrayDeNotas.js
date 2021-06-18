export default class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
//filtra todos que nao sao a funcao do objeto de inscritos
    }
    
    notificar() {
        this._inscritos.forEach(func => { //recebe como parametro a funcao 'func'que vai executar a func()
            func(this.notas); //pega as novas informacoes da fonte de dados do array de notas e notifica os inscritos
        });
    }


    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar()

    }

    apagarNotas(indice){
        this.notas.splice(indice, 1);
        this.notificar()
    }
}

class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}