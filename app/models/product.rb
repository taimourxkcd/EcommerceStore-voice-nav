# == Schema Information
#
# Table name: customers
#
#  id                   :integer          not null, primary key
#  title                :string
#  description          :string
#  price                :decimal
#  customer_id          :integer
#  category_id          :integer
#  image_id             :integer
#  created_at           :datetime         not null
#  updated_at           :datetime         not null


class Product < ApplicationRecord
    belongs_to :customer
    belongs_to :category
end
