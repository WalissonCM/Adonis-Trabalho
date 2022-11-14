import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoria from 'App/Models/Categoria'

export default class extends BaseSeeder {
  public async run () {
    await Categoria.createMany([
      {nome: "Coolers"},
      {nome: "Disco Rígido (HD)"},
      {nome: "Fontes"},
      {nome: "Memória Ram"},
      {nome: "Placa de Vídeo"},
      {nome: "Placas-Mãe"},
      {nome: "Processadores"},
      {nome: "SSD"},
      {nome: "Teclado"},
      {nome: "Mouse"},
      {nome: "Monitor"},
      {nome: "Gabinete"},
      {nome: "Fone"},
      {nome: "MousePad"}
    ])
  }
}
