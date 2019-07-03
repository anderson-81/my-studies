class CommentsController < ApplicationController

	# http_basic_authenticate_with :login => 'anderson', :pass => '121181', :except => [:index, :show]

	def create
		@article = Article.find(params[:article_id])
		@comment = @article.comments.create(comment_params)
		redirect_to @article
	end

	def destroy
		@article = Article.find(params[:article_id])
		@comment = Comment.find(params[:id])
		@id = @comment.article_id
		if @comment.destroy
			redirect_to article_path(@article)
		else
			redirect_to articles_path
		end
	end

	private 
		def comment_params
			params.require(:comment).permit(:commenter, :body)
		end
end
