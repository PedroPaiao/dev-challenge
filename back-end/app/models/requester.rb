class Requester < ApplicationRecord
  has_many :phones
  has_many :addresses
  has_many :credit_requests
  has_many :lendings
end
