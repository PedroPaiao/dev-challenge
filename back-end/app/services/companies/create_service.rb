class Companies::CreateService < ::BaseService
  needs :company_params

  steps :create_company

  def call
    process_steps
    @user
  end

  private

  def create_company
    @company = Company.create(company_params)
    fail(@company.errors.full_messages) unless @company.persisted?
  end

end