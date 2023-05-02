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

      def getAllProducts
        products = Product.all
        render json: products
      end

      private

      def product_params
        params.require(:product).permit(:title, :description, :price, :customer_id, :category_id, :image_id, :slug, :color, :quantity, :sold)
      end
    end
  end
end
