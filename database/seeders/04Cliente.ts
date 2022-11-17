import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome:"Carlos", email:"Carlos@gmail.com", cpf:"123.456.789-00", telefone:"(61) 91234-5678", cep:"12345-678", endereco:"Ceilãndia-Norte"},
      {nome:"Matheus", email:"Matheus@gmail.com", cpf:"987.654.321-00", telefone:"(61) 99876-5432", cep:"98765-432", endereco:"Ceilãndia-Norte"}
    ])
  }
}
