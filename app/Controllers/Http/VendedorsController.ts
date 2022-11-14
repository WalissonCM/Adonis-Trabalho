// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vendedor from "App/Models/Vendedor"
import VendedorValidator from "App/Validators/VendedorValidator"

export default class VendedorsController {
    index(){
        return Vendedor.query().preload('venda')
                               .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(VendedorValidator)
        return Vendedor.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Vendedor.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Vendedor.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Vendedor.findOrFail(id)
        const dados = request.only(["nome", "email", "cpf", "salario", "telefone", "cep", "endereco"])
        aluno.merge(dados)
        return aluno.save()
    }
}
