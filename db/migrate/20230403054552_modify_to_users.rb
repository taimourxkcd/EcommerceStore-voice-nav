class ModifyToUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :password_digest
    remove_column :users, :first_name
    remove_column :users, :last_name
    add_column :users, :name, :string
    add_column :users, :password, :string
  end
end
