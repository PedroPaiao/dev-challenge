class CreateLending < ActiveRecord::Migration[6.1]
  def change
    create_table :lendings do |t|
      # Associations
      t.references :requester, null: false, foreign_key: true

      # Attributes
      t.float   :price,               null: false, default: 0.0
      t.integer :installments_count,  null: false, default: 0
      t.float   :tax,                 null: false, default: 0.0

      t.timestamps
    end
  end
end
