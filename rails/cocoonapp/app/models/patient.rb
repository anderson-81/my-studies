class Patient < ActiveRecord::Base
	# colocados manualmente:
	has_many :appointments
	has_many :physicians, through: :appointments
end
