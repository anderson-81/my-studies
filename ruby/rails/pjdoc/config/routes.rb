Rails.application.routes.draw do
  
  resources :articles do
  	resources :comments # Adicionando rotas para comments (FILHOS) (1..*)
  end


  root 'welcome#index'
  # get '/articles/:id' => 'articles#show'
  # get '/articles' => 'articles#index'
end
