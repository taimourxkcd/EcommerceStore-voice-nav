class RemoveColumnAddress2FromSupplier < ActiveRecord::Migration[7.0]
  def change
    remove_column :suppliers, :address2
    add_column :addresses, :supplier_id, :integer
  end
end
