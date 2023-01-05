class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.decimal :price
      t.integer :customer_id
      t.integer :category_id
      t.integer :image_id

      t.timestamps
    end
  end
end
