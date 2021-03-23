class CreateAddress < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      # Association
      t.references :requester, null: false, foreign_key: true
      
      # Attributes
      t.string     :street, default: "",      null: false
      t.string     :city,   default: "",      null: false
      t.string     :state,  default: "",      null: false

      t.timestamps
    end
  end
end
