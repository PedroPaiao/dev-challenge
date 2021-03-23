class Sessions::SessionService < ::BaseService
  needs :session_params

  steps :fetch_instance,
        :verify_password

  def call
    process_steps
    @company
  end

  private

  def fetch_instance
    @company = Company.find_for_database_authentication(email: session_params[:email])
    fail([I18n.t('services.session_service.errors.user_not_found')]) unless @user.present?
  end

  def verify_password
    fail([I18n.t('services.session_service.errors.invalid_params')]) unless @user.valid_password?(session_params[:password])
  end

end
    