class Physician < ActiveRecord::Base

	# colocados manualmente:
	has_many :appointments
	has_many :patients, through: :appointments

	# para poder receber dados de consultas:
	accepts_nested_attributes_for :appointments, reject_if: :all_blank, allow_destroy: true
end
