class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.integer :order_id
      t.decimal :amount
      t.string :status
      t.string :transaction_id
      t.text :transaction_log
      t.string :currency
      t.string :card_number

      t.timestamps
    end
  end
end
