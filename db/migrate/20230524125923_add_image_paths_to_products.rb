class AddImagePathsToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :image_path5, :string
    add_column :products, :image_path6, :string
  end
end
