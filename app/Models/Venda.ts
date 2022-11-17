import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Vendedor from './Vendedor'
import Produto from './Produto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public valor: number

  @column()
  public data: Date

  @column()
  public clienteId: number

  @column()
  public vendedorId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(()=>Vendedor)
  public vendedor: BelongsTo<typeof Vendedor>

  @manyToMany(()=>Produto, {pivotTable: 'venda_produtos'})
  public produto: ManyToMany<typeof Produto>
}
