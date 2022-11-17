import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VendaProduto from 'App/Models/VendaProduto'

export default class extends BaseSeeder {
  public async run () {
    await VendaProduto.createMany([
      {vendaId: 1, produtoId: 1}
     
    ])
  }
}
