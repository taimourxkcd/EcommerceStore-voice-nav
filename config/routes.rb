Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # namespace: api do
  #   namepace: v1 do
  #     resources: orders do
  #       resources: products
  #     end
  #   end
  # end

  root "users#index"
  get "*path", to: "users#index", constraints: ->(request) { request.format.html? }, via: :all
  # get "/api/users", to: "api/users#index"

  resources :orders
end
