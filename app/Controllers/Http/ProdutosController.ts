// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"
import ProdutoValidator from "App/Validators/ProdutoValidator"

export default class ProdutosController {
    index(){
        return Produto.query().preload('venda')
                              .preload('categoria')
                              .preload('fornecedor')
                              .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(ProdutoValidator)
        return Produto.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Produto.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Produto.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Produto.findOrFail(id)
        const dados = request.only(["nome", "preco", "quantidade", "categoria_id", "fornecedor_id"])
        aluno.merge(dados)
        return aluno.save()
    }
}
