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
  belongs_to :brand, optional: true
  belongs_to :customer
  belongs_to :category

  validates :description, presence: true

  # TODO: make sure that slug is unique, below line now working now
  # validates :slug, uniqueness: true, presence: true

  def to_param
    slug
  end

  def generate_slug
    self.slug ||= [brand.name, category.title, self.title].map(&:parameterize).join("-")
    puts "Generated slug: #{self.slug}"
  end
end
