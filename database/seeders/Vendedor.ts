import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vendedor from 'App/Models/Vendedor'

export default class extends BaseSeeder {
  public async run () {
    await Vendedor.createMany([
    {nome:"Rogerio", email:"Rogerio@gmail.com", cpf:"123.456.789-00", salario:"5000", telefone:"(61) 91234-5678", cep:"12345-678", endereco:"Ceilãndia-Norte"},
    {nome:"Gabriel", email:"Gabriel@gmail.com", cpf:"987.654.321-00", salario:"5000", telefone:"(61) 99876-5432", cep:"98765-432", endereco:"Ceilãndia-Norte"}
    ])
  }
}
