// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from "App/Models/Categoria"
import CategoriaValidator from "App/Validators/CategoriaValidator"

export default class CategoriasController {
    index(){
        return Categoria.query().preload('produto')
                                .paginate(1)
     }
 
    async store({request}){
        const dados = await request.validate(CategoriaValidator)
        return Categoria.create(dados)

     }
     
    async show({request}){
        const id = request.param('id')
        return await Categoria.findOrFail(id)
        
    }

    async destroy({request}){
        const id = request.param('id')
        const aluno = await Categoria.findOrFail(id)
        return aluno.delete()
    }

    async update({request}){
        const id = request.param('id')
        const aluno = await Categoria.findOrFail(id)
        const dados = request.only(["nome"])
        aluno.merge(dados)
        return aluno.save()
    }
}
