# == Schema Information
#
# Table name: payments
#
#  id                      :integer          not null, primary key
#  title                   :string(255)
#  description             :string(255)
#  price                   :string(255)
#  customer_id             :integer
#  category_id             :integer  
#  image_id                :integer  
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#
class Product < ApplicationRecord
    belongs_to :customer
    belongs_to :category
end
