# == Schema Information
#
# Table name: orders
#
#  id                       :integer          not null, primary key
#  user_id                  :integer
#  location_id              :integer
#  price                    :decimal(10, 2)
#  created_at               :datetime
#  updated_at               :datetime
#  payment_status           :string(255)
#  discount         :decimal(10, 2)
#  customer_id              :integer
#  tax                      :decimal(10, 2)

class Order < ApplicationRecord

    belongs_to :user, optional: true
    has_many :products
    has_one :payment
    belongs_to :customer
    has_many :order_items
    belongs_to :location, inverse_of: :orders
end
