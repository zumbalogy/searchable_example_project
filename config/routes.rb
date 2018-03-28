Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'users#root'

  get '/all', to: 'users#all'

  post '/search/', to: 'users#search'
end
