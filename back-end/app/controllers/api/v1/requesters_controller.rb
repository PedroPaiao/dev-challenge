class Api::V1::RequestersController < Api::ApiController
  def index
    requesters = Requester.all.order(created_at: :desc)
    render json: requesters, location: '', each_serializer: RequesterSerializer 
  end
  
  def create
    requester_service = Requesters::RequesterCreateService.call(requester_params: requester_params)
    response_handler(requester_service)
  end

  private

  def requester_params
    params.fetch(:requester).permit(:company_name, :cnpj, { addresses: [] }, { phones: [] })
  end

  def response_handler(service)
    byebug
    if service.success?
      render json: service.result, location: '', serializer: RequesterSerializer 
    else
      render_unprocessable_entity_error(service.error)
    end
  end

end