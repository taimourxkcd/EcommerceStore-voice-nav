class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.text :description
      t.string :country

      t.timestamps
    end
  end
end
