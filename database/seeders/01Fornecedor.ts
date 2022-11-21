import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class extends BaseSeeder {
  public async run () {
    await Fornecedor.createMany([
      {nome:"Intel", cnpj:"12.123.456./0001-00"},
      {nome:"Nvidia", cnpj:"98.765.432./0001-00"},
      {nome:"Samsung", cnpj:"65.873.012./0001-00"},
      {nome:"Seagate", cnpj:"32.412.835./0001-00"},
      {nome:"Corsair", cnpj:"19.835.732./0001-00"},
      {nome:"EVGA", cnpj:"61.025.613./0001-00"},
      {nome:"Asus", cnpj:"72.368.921./0001-00"},
      {nome:"HyperX", cnpj:"87.502.540./0001-00"},
      {nome:"Kingston", cnpj:"54.259.695./0001-00"},
      {nome:"Razer", cnpj:"44.793.487./0001-00"}
    ])
  }
}
