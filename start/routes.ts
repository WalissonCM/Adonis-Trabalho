/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.store')/*.middleware('auth')*/
Route.post('/login', 'UsersController.login')

Route.group(() => {
Route.resource('/categorias', 'CategoriasController').apiOnly()
Route.resource('/clientes', 'clientesController').apiOnly()
Route.resource('/fornecedors', 'FornecedorsController').apiOnly()
Route.resource('/produtos', 'ProdutosController').apiOnly()
Route.resource('/venda_produtos', 'VendaProdutosController').apiOnly()
Route.resource('/vendas', 'VendasController').apiOnly()
Route.resource('/vendedors', 'VendedorsController').apiOnly()

}).middleware('auth')