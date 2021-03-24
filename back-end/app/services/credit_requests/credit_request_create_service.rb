class CreditRequests::CreditRequestCreateService < ::BaseService
  needs :credit_request_params
  needs :requester_params

  steps :fetch_requester,
        :create_credit_request,
        :verify_credit_request_errors

  def call
    process_steps
    @credit_request
  end

  private

  def fetch_requester
    @requester = Requester.find_or_initialize_by(cnpj: requester_params[:cnpj])
    @requester.assign_attributes(requester_params)
    @requester.save
    fail(@requester.errors.full_messages) unless @requester.persisted?
  end

  def create_credit_request
    @credit_request = @requester.credit_requests.create(credit_request_params) if @requester.present?
  end

  def verify_credit_request_errors
    fail(@credit_request.errors.full_messages) unless @credit_request.persisted?
  end

end