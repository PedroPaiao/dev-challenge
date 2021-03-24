class Requesters::RequesterCreateService < ::BaseService
  needs :requester_params

  steps :create_requester,
        :verify_requester_errors

  def call
    process_steps
    @requester
  end

  private

  def create_requester
    @requester = Requester.create(requester_params)
  end

  def verify_requester_errors
    fail(@requester.errors.full_messages) unless @requester.persisted?
  end

end