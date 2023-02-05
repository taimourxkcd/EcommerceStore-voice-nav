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

json = ActiveSupport::JSON.decode(File.read('db/seeds/locations.json'))
json.each do |record|
  Location.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/orders.json'))
json.each do |record|
  Order.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/payments.json'))
json.each do |record|
  Payment.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/users.json'))
json.each do |record|
  User.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/images.json'))
json.each do |record|
  Image.create!(record)
end

json = ActiveSupport::JSON.decode(File.read('db/seeds/order_items.json'))
json.each do |record|
  OrderItem.create!(record)
end




