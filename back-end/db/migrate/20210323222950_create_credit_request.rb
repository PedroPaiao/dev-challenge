class CreateCreditRequest < ActiveRecord::Migration[6.1]
  def change
    create_table :credit_requests do |t|
      # Associations
      t.references :requester, null: false, foreign_key: true

      # Attributes
      t.float :value, default: 0, null: false

      t.timestamps
    end
  end
end
