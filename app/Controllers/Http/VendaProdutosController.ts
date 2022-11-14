// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import VendaProduto from "App/Models/VendaProduto"
import VendaProdutoValidator from "App/Validators/VendaProdutoValidator"

export default class VendaProdutosController {
    index(){
        return VendaProduto.query().paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(VendaProdutoValidator)
        return VendaProduto.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await VendaProduto.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await VendaProduto.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await VendaProduto.findOrFail(id)
        const dados = request.only(["venda_id", "produto_id"])
        aluno.merge(dados)
        return aluno.save()
    }
}
