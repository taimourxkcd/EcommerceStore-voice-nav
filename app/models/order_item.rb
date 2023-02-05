# == Schema Information
#
# Table name: order_items
#
#  id                        :integer          not null, primary key
#  order_id                  :integer
#  item_id                   :integer
#  price                     :decimal(10, 2)   default(0.0)
#  created_at                :datetime
#  updated_at                :datetime
#  component_option_value_id :integer
#  note                      :string(255)
#  number                    :float
#  type                      :string(255)
#  item_type                 :string(255)
#  deleted_at                :datetime
#  weighted_number           :float
#  cost_price                :decimal(, )
#  discount                  :decimal(10, 2)
#

class OrderItem < ApplicationRecord
    belongs_to :order
end
