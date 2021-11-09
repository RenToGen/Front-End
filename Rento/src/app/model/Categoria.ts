import { Produto } from "./Produto"

export class Categoria{
    public id:number
    public categoria: string
    public descricao: string
    public valor:number

    public produto: Produto[]
}