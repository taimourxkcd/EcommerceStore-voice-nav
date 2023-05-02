class AddColorToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :color, :integer
    change_column :products, :color, :integer, limit: 1
    execute <<-SQL
      ALTER TABLE products
        ADD CONSTRAINT check_color CHECK (color IN (0, 1, 2))
    SQL
  end
end
