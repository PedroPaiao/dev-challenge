# frozen_string_literal: true

class CreateRequesters < ActiveRecord::Migration[6.1]
  def change
    create_table :requesters do |t|
      # Attributes
      t.string :cnpj
      t.string :company_name

      t.timestamps null: false
    end

    add_index :requesters, :cnpj,                 unique: true
  end
end
