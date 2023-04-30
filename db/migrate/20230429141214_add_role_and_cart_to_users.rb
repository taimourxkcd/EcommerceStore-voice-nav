class AddRoleAndCartToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :role, :string
    add_column :users, :cart, :jsonb
  end
end
