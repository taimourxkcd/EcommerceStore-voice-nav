module Api
  module V1
    class ProductsController < ApplicationController
      def create
        product = Product.new(product_params)
        if product.save
          render json: { success: true, product: product }
        else
          render json: { success: false, errors: product.errors }
        end
      end

      def show
        @product = Product.find(params[:id])
        render json: @product
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Product not found" }, status: :not_found
      end

      def destroy
        @product = Product.find(params[:id])

        if @product.destroy
          render json: { success: true }
        else
          render json: { success: false, errors: @product.errors.full_messages }
        end
      end

      def getAllProducts
        products = Product.all
        render json: products
      end

      def updateaProduct
        @product = Product.find(params[:id])

        if @product.update(product_params)
          render json: { success: true, product: @product }
        else
          render json: { success: false, errors: @product.errors.full_messages }
        end
      end

      private

      def product_params
        params.require(:product).permit(:title, :description, :price, :image_path, :customer_id, :category_id, :image_id, :color, :quantity, :sold, :rating).tap do |whitelisted|
          whitelisted[:brand_id] = params[:product][:brand_id] || Brand.find_or_create_by(name: "Default Brand").id
        end
      end

      def authenticate_user!
        unless logged_in?
          render json: { error: "You must be logged in to perform this action" }, status: :unauthorized
        end
      end
    end
  end
end
