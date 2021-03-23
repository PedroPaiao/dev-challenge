class Installments::InstallmentsCreateService < ::BaseService
  needs :lending

  steps :fetch_installments,
        :fetch_attributes_to_calculate,
        :calculate_installment_value,
        :create_installments,
        :verify_lending_errors

  def call
    process_steps
    @installments
  end

  private

  def fetch_installments
    @lending = lending
    @installments = []
  end

  def fetch_attributes_to_calculate
    @installments_count = @lending[:installments_count]
    @tax                = (@lending[:tax]/100)
    @price              = @lending[:price]
  end

  def calculate_installment_value
    @value = @price * ((((1 + @tax) ** @installments_count) * @tax) / (((1 + @tax) ** @installments_count) - 1))
  end

  def create_installments
    initial_date = DateTime.now
    @installments_count.times do
      installment = @lending.installments.create(value: @value.ceil(2), due_date: initial_date, paid: false)
      @installments << installment
      initial_date = initial_date + 30
    end
  end

  def verify_lending_errors
    @installments.each do |installment|
      fail(installment.errors.full_messages) unless @lending.persisted?
    end
  end

end