Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end

  root "users#index"
  get "*path", to: "users#index", constraints: ->(request) { request.format.html? }, via: :all
  # get "/api/users", to: "api/users#index"

  resources :orders
end
