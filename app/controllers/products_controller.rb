class ProductsController < ApplicationController
  # handle search
  def search
    query = params[:query]
    # Perform the search logic based on the query parameter
    results = Product.where("title LIKE ?", "%#{query}%")
    render json: results
  end
end
