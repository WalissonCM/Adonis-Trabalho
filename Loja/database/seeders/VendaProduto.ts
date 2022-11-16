import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VendaProduto from 'App/Models/VendaProduto'

export default class extends BaseSeeder {
  public async run () {
    await VendaProduto.createMany([
      {vendaId: 1, produtoId: 1},
      {vendaId: 2, produtoId: 2},
      {vendaId: 3, produtoId: 3},
      {vendaId: 4, produtoId: 4},
      {vendaId: 5, produtoId: 5},
      {vendaId: 6, produtoId: 6},
      {vendaId: 7, produtoId: 7},
      {vendaId: 8, produtoId: 8},
      {vendaId: 9, produtoId: 9},
      {vendaId: 10, produtoId: 10},
      {vendaId: 11, produtoId: 11},
      {vendaId: 12, produtoId: 12},
      {vendaId: 13, produtoId: 13},
      {vendaId: 14, produtoId: 14},
    ])
  }
}
