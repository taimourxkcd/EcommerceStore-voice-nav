Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "home#index"

   root "users#index"

  #  get '/display', to: 'users#display'

  # resources :users
  resources :customers
  resources :orders
  resources :users
  resources :payments
  resources :address
  resources :supplier
  

end
