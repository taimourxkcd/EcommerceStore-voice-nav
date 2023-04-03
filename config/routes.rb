Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :sessions, only: [:create, :destroy]
      get "/me", to: "users#show"
    end
  end

  # devise_for :users

  resources :sessions, only: [:create]
  resources :users

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  root "home#index"
  get "*path", to: "home#index", constraints: ->(request) { request.format.html? }, via: :all
  # get "/api/users", to: "api/users#index"

  resources :orders
end
