# == Schema Information
#
# Table name: orders
#
#  id                       :integer          not null, primary key
#  title                    :integer
#  description              :integer
#  price                    :decimal(10, 2)
#  slug                     :string
#  image_id                 :integer
#  category_id              :integer
#  customer_id              :integer
#  created_at               :datetime
#  updated_at               :datetime

class Product < ApplicationRecord
  belongs_to :brand, optional: true

  validates :description, presence: true

  # TODO: make sure that slug is unique, below line now working now
  # validates :slug, uniqueness: true, presence: true

end
