# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
json = ActiveSupport::JSON.decode(File.read('db/seeds/customers.json'))
json.each do |record|
  Customer.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/categories.json'))
json.each do |record|
  Category.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/products.json'))
json.each do |record|
  Product.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/suppliers.json'))
json.each do |record|
  Supplier.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/addresses.json'))
json.each do |record|
  Address.create!(record)
end



