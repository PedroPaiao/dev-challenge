class Api::V1::LendingsController < Api::ApiController
  before_action :find_requester, only: [:create]

  def index
    lendings = Lending.all.order(created_at: :desc)
    render json: lendings, location: '', each_serializer: LendingSerializer 
  end

  def create
    create_lending_service = Lendings::LendingCreateService.call(
      lending_params: lending_params,
      requester_params: requester_params
    )
    response_handler(create_lending_service)
  end

  private

  def lending_params
    params.fetch(:lending).permit(:price, :installments_count, :tax)
  end
  
  def requester_params
    params.fetch(:requester).permit(:name, :cnpj, :company_name)
  end

  def find_requester
    return if requester_params[:requester].blank?
  end

  def response_handler(service)
    if service.success?
      render json: service.result, location: '', serializer: LendingSerializer 
    else
      render_unprocessable_entity_error(service.error)
    end
  end

end