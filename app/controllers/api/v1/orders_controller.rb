class Api::V1::LocationsController < ApplicationController
  def show
  end

  private

  def set_order
    @order = Order.find(params[:id])
  end
end
