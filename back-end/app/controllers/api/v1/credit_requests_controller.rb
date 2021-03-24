class Api::V1::CreditRequestsController < Api::ApiController
  def index
    credit_requests = CreditRequest.all.order(created_at: :desc)
    render json: credit_requests, location: '', each_serializer: CreditRequestSerializer 
  end

  def create
    create_credit_request = CreditRequests::CreditRequestCreateService.call(
      credit_request_params: credit_request_params,
      requester_params: requester_params
    )
    response_handler(create_credit_request)
  end

  private

  def credit_request_params
    params.fetch(:credit_request).permit(:value)
  end
  
  def requester_params
    params.fetch(:requester).permit(:name, :cnpj, :company_name)
  end

  def response_handler(service)
    if service.success?
      render json: service.result, location: '', serializer: CreditRequestSerializer 
    else
      render_unprocessable_entity_error(service.error)
    end
  end

end