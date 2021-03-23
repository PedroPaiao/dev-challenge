class Api::V1::CompaniesController < Api::ApiController
  before_action :authenticate_user_from_token!, except: [:create, :show]
  before_action :find_user, only: [:update]

  def create
    company_service = Companies::CreateService.call(user_params: user_params)
    if company_service.success?
      sign_in company_service.result, store: false
      render json: company_service.result, location: '', scope: company_service.result.refresh_token, serializer: CompanySerializer
    else
      render_unprocessable_entity_error(company_service.error)
    end
  end

  private

  def company_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def response_handler(service)
    if service.success?
      render_success
    else
      render_unprocessable_entity_error(service.error)
    end
  end

end