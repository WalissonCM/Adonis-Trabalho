import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {clienteId: 1, vendedorId: 1, data: new Date(2020, 6, 20), valor: 2300}
    ])
  }
}
