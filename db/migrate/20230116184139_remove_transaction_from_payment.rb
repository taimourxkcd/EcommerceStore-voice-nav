class RemoveTransactionFromPayment < ActiveRecord::Migration[7.0]
  def change
    remove_column :payments, :transaction_id
    remove_column :payments, :transaction_log
  end
end
