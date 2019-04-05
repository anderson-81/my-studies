require 'base64'

class ArticlesController < ApplicationController

	# http_basic_authenticate_with :login => 'anderson', :pass => '121181', :except => [:index, :show]
	
	def index
		@articles = Article.all
	end
	 
	def show
	    @article = Article.find(params[:id])
	end

	def new
		@article = Article.new
	end

	def edit
		@article = Article.find(params[:id])
	end


	def create
		# Apenas para mostrar na tela.
		# render plain: params[:article].inspect 

		# Gravando adicionando campos para tal.
		# @article = Article.new(params.require(:article).permit(:title, :text))
		
		# picture = Base64.encode64()
		# @article.picture = picture
		# @article.picture = Base64.encode64(@article.picture)

		@article = Article.new(article_params)

		file_upload = params[:article][:picture]
		@article.picture = Base64.urlsafe_encode64(file_upload)

		puts @article.picture

		if @article.save
			redirect_to @article
		else
			render 'new' # Renderiza o proprio formulário NEW.
		end
		
	end

	def update
		@article = Article.find(params[:id])
		if @article.update(article_params)
			redirect_to @article
		else
			render 'edit'
		end
	end

	def destroy
		@article = Article.find(params[:id])
		if @article.destroy
			redirect_to articles_path
		else
			render 'edit'
		end
	end

	# Adicionar parametros para nao serem adicionados 
	# fora do contexto pretentido:
	private 
		def article_params
			params.require(:article).permit(:title, :text, :picture)
		end
end
