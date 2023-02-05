class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.string :file_name
      t.integer :file_size
      t.string :content_type

      t.timestamps
    end
  end
end
