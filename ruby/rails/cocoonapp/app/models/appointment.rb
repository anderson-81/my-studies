class Appointment < ActiveRecord::Base
  belongs_to :physician
  belongs_to :patient

  # para poder receber dados de pacientes:
  accepts_nested_attributes_for :patient, reject_if: :all_blank, allow_destroy: true
end
