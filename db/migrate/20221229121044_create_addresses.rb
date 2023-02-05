class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :street2
      t.string :string
      t.string :city
      t.string :zip
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
