class CreateInstallments < ActiveRecord::Migration[6.1]
  def change
    create_table :installments do |t|
      # Associations
      t.references :lending, null: false, foreign_key: true

      # Atributes
      t.string     :due_date, null: false, default: ""
      t.float      :value,    null: false, default: 0.0
      t.boolean    :paid,     null: false, default: false

      t.timestamps
    end
  end
end
