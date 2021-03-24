class CreditRequestSerializer < ActiveModel::Serializer
  attributes :value, :requester

  def requester
    ActiveModelSerializers::SerializableResource.new(object.requester, each_serializer: RequesterSerializer)
  end
    
end
        