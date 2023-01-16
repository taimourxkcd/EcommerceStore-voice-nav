class RemoveLocationIdColumnFromSupplier < ActiveRecord::Migration[7.0]
  def change
    remove_column :suppliers, :location_id
  end
end
