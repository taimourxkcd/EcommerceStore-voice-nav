class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.integer :location_id
      t.integer :user_id

      t.timestamps
    end
  end
end
