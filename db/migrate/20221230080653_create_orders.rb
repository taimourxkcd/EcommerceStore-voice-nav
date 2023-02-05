class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :location_id
      t.decimal :price
      t.string :payment_state
      t.decimal :discount
      t.decimal :tax

      t.timestamps
    end
  end
end
