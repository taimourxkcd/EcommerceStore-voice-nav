Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show]
      resources :sessions, only: [:create, :destroy]
      resources :products

      # new routes

      # user
      get "/Users/all-users", to: "users#getAllUsers"
      get "/Users/:id", to: "users#getaUser"
      get "/Users/:id", to: "users#getaUser"
      delete "/Users/:id", to: "users#deleteaUser"
      put "/Users/:id", to: "users#updateaUser"
      get "/virtualTryOn", to: "users#virtualTryOn"

      # product
      get "/Products/all-products", to: "products#getAllProducts"
      put "/Products/:id", to: "products#updateaProduct"
      # creating the rest of the restful routes as provided by rails. this was just for practice
    end
  end

  # new routes
  post "/signup", to: "users#create"
  # devise_for :users

  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#logout"
  get "/logged_in", to: "sessions#logged_in"
  resources :sessions, only: [:create]
  resources :users

  # search routes
  post "/products/search", to: "products#search"

  root "home#index"
  get "*path", to: "home#index", constraints: ->(request) { request.format.html? }, via: :all

  # new routes
  resources :products, param: :slug
end
