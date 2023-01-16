class RemoveLocationIdFromOrders < ActiveRecord::Migration[7.0]
  def change
    remove_column :orders, :location_id
  end
end
