class RemoveColumnFromAddress < ActiveRecord::Migration[7.0]
  def change

    remove_column :addresses, :street2
    remove_column :addresses, :string

  end

end
