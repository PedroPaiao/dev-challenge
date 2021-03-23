class LendingSerializer < ActiveModel::Serializer
  attributes :price, :installments_count, :tax, :requester, :installments


  def requester
    ActiveModelSerializers::SerializableResource.new(object.requester, each_serializer: RequesterSerializer)
  end

  def installments
    object.installments
  end
    
end
      