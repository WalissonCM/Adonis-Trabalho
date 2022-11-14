import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Fornecedor from './Fornecedor'
import Venda from './Venda'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public preco: number

  @column()
  public quantidade: number

  @column()
  public categoriaId: number

  @column()
  public fornecedorId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Categoria)
  public categoria: BelongsTo<typeof Categoria>

  @belongsTo(()=>Fornecedor)
  public fornecedor: BelongsTo<typeof Fornecedor>

  @manyToMany(()=>Venda, {pivotTable:'venda_produto'})
  public venda: ManyToMany<typeof Venda>
}
