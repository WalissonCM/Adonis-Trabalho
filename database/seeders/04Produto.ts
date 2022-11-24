import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {nome:"WaterCooler", preco:2000, quantidade:50, categoriaId:1, fornecedorId:5},
      {nome:"HD 1 TB", preco:300, quantidade:50, categoriaId:2, fornecedorId:4},
      {nome:"i9 13900K", preco:5000, quantidade:50, categoriaId:7, fornecedorId:1},
      {nome:"Fonte 1600w", preco:3000, quantidade:50, categoriaId:3, fornecedorId:6},
      {nome:"Memória 3200MHz", preco:200, quantidade:50, categoriaId:4, fornecedorId:9},
      {nome:"RTX 4090", preco:16000, quantidade:50, categoriaId:5, fornecedorId:2},
      {nome:"Asus Rog x670", preco:5000, quantidade:50, categoriaId:6, fornecedorId:7},
      {nome:"SSD 240Gb", preco:200, quantidade:50, categoriaId:8, fornecedorId:9},
      {nome:"Corsair Carbide", preco:500, quantidade:50, categoriaId:12, fornecedorId:5},
      {nome:"Cloud Orbit S", preco:2700, quantidade:50, categoriaId:13, fornecedorId:8},
      {nome:"Teclado sem fio", preco:2200, quantidade:50, categoriaId:9, fornecedorId:10},
      {nome:"Mouse sem fio", preco:2400, quantidade:50, categoriaId:10, fornecedorId:10},
      {nome:"Monitor Odyssey", preco:21500, quantidade:50, categoriaId:11, fornecedorId:3},
      {nome:"Mousepad gamer", preco:500, quantidade:50, categoriaId:14, fornecedorId:8}
    ])
  }
}
