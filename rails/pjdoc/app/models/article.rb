class Article < ActiveRecord::Base
	# Destruir os comentários caso artigo seja excluido.
	has_many :comments, :dependent => :destroy

	validates :title, presence: true, length: { minimum: 5} 
	validates :text, presence: true, length: { minimum: 20} 
end
