class Lending < ApplicationRecord
  belongs_to :requester
  has_many   :installments
end