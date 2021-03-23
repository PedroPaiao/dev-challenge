class CreatePhone < ActiveRecord::Migration[6.1]
  def change
    create_table :phones do |t|
      # Associations
      t.references :requester, null: false, foreign_key: true

      # Attributes
      t.string     :number,    null: false, default: ""

      t.timestamps
    end
  end
end
