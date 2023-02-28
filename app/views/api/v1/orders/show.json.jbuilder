json.id @order.id
json.price @order.price

json.current do
    json.title @order.products.last.title
end
end