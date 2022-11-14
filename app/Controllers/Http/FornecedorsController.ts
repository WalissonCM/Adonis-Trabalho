// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor"
import FornecedorValidator from "App/Validators/FornecedorValidator"

export default class FornecedorsController {
    index(){
        return Fornecedor.query().preload('produto')                       
                                 .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(FornecedorValidator)
        return Fornecedor.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Fornecedor.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Fornecedor.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Fornecedor.findOrFail(id)
        const dados = request.only(["nome", "cnpf"])
        aluno.merge(dados)
        return aluno.save()
    }
}
