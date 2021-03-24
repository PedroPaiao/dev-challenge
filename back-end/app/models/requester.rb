class Requester < ApplicationRecord
  validates_presence_of :cnpj, :company_name
  validates_uniqueness_of :cnpj, case_sensitive: true  

  has_many :phones
  has_many :addresses
  has_many :credit_requests
  has_many :lendings
end
