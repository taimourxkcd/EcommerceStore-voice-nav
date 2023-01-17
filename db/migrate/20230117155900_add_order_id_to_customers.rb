class AddOrderIdToCustomers < ActiveRecord::Migration[7.0]
  def change
    add_column :customers, :order_id, :integer
  end
end
