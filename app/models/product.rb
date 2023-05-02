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
  enum color: [:red, :black, :green]
  before_save :generate_slug
  validates :description, presence: true
  belongs_to :brand

  def to_param
    slug
  end

  def generate_slug
    self.slug ||= title.parameterize
  end

  belongs_to :customer
  belongs_to :category
end
