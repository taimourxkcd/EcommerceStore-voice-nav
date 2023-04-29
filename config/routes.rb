Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show]
      resources :sessions, only: [:create, :destroy]
      get "/me", to: "users#show"
      get "/Users/all-users", to: "users#getAllUsers"
      get "/Users/:id", to: "users#getaUser"
    end
  end

  # devise_for :users

  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#is_logged_in?"
  resources :sessions, only: [:create]
  resources :users

  root "home#index"
  get "*path", to: "home#index", constraints: ->(request) { request.format.html? }, via: :all

  get "/api/users", to: "api/users#index"
  post "/verify/login", to: "sessions#create"
  get "/authorized", to: "sessions#show"
  get "/dashboard", to: "users#show"

  # new routes
end
