// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
    index(){
        return Cliente.query().preload('venda')
                              .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(ClienteValidator)
        return Cliente.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Cliente.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Cliente.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Cliente.findOrFail(id)
        const dados = request.only(["nome", "email", "cpf", "telefone", "cep", "endereco"])
        aluno.merge(dados)
        return aluno.save()
    }
}
