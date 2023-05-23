class AddAdditionalImagePathsToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :image_path2, :string
    add_column :products, :image_path3, :string
    add_column :products, :image_path4, :string
  end
end
