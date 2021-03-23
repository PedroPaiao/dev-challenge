class CompanySerializer < ActiveModel::Serializer
  attributes :id, :email, :description
  attribute :token, if: :has_token

  def token
    scope[:token]
  end

  def has_token
    scope[:token].present?
  end

end
    