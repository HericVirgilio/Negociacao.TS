export class Negociacao {
    readonly data: Date;
    readonly quantidade: number;
    readonly valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume(): number {
        return this.quantidade * this.valor;
    }
}
