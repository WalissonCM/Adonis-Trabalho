// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda"
import VendaValidator from "App/Validators/VendaValidator"

export default class VendasController {
    index(){
        return Venda.query().preload('cliente')
                            .preload('vendedor')
                            .preload('produto')
                            .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(VendaValidator)
        return Venda.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Venda.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Venda.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Venda.findOrFail(id)
        const dados = request.only(["valor", "data", "cliente_id", "vendedor_id"])
        aluno.merge(dados)
        return aluno.save()
    }
}
