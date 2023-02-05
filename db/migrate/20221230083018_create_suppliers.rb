class CreateSuppliers < ActiveRecord::Migration[7.0]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.string :country
      t.string :city
      t.string :phone
      t.integer :location_id

      t.timestamps
    end
  end
end
