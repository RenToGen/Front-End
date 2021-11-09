import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Produto{
    public id: number
    public nomeServico: string
    public apresentacao: string
    public usuario: Usuario
    public categoria: Categoria
}