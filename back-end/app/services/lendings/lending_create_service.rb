class Lendings::LendingCreateService < ::BaseService
  needs :lending_params
  needs :requester_params

  steps :fetch_requester,
        :create_lending,
        :create_installments,
        :verify_lending_errors

  def call
    process_steps
    @lending
  end

  private

  def fetch_requester
    @requester = Requester.find_or_initialize_by(cnpj: requester_params[:cnpj])
    @requester.save
    # @requester.update_attributes()
    fail(@requester.errors.full_messages) unless @requester.persisted?
  end

  def create_lending
    @lending = @requester.lendings.create(lending_params) if @requester.present?
  end

  def create_installments
    @installments = Installments::InstallmentsCreateService.call(lending: @lending)
  end


  def verify_lending_errors
    fail(@lending.errors.full_messages) unless @lending.persisted?
  end

end