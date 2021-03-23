# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_23_223908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.bigint "requester_id", null: false
    t.string "street", default: "", null: false
    t.string "city", default: "", null: false
    t.string "state", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["requester_id"], name: "index_addresses_on_requester_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.string "description", default: ""
    t.string "phone", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_companies_on_email", unique: true
    t.index ["reset_password_token"], name: "index_companies_on_reset_password_token", unique: true
  end

  create_table "credit_requests", force: :cascade do |t|
    t.bigint "requester_id", null: false
    t.float "value", default: 0.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["requester_id"], name: "index_credit_requests_on_requester_id"
  end

  create_table "installments", force: :cascade do |t|
    t.bigint "lending_id", null: false
    t.string "due_date", default: "", null: false
    t.float "value", default: 0.0, null: false
    t.boolean "paid", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["lending_id"], name: "index_installments_on_lending_id"
  end

  create_table "lendings", force: :cascade do |t|
    t.bigint "requester_id", null: false
    t.float "price", default: 0.0, null: false
    t.integer "installments_count", default: 0, null: false
    t.float "tax", default: 0.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["requester_id"], name: "index_lendings_on_requester_id"
  end

  create_table "phones", force: :cascade do |t|
    t.bigint "requester_id", null: false
    t.string "number", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["requester_id"], name: "index_phones_on_requester_id"
  end

  create_table "requesters", force: :cascade do |t|
    t.string "cnpj"
    t.string "company_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cnpj"], name: "index_requesters_on_cnpj", unique: true
  end

  add_foreign_key "addresses", "requesters"
  add_foreign_key "credit_requests", "requesters"
  add_foreign_key "installments", "lendings"
  add_foreign_key "lendings", "requesters"
  add_foreign_key "phones", "requesters"
end
