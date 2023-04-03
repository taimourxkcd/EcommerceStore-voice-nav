# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      not null
#  encrypted_password     :string(128)      not null
#  user_picture_url       :text
#  first_name             :string(255)
#  last_name              :string(255)
#  phone                  :string(255)

class User < ApplicationRecord
  has_secure_password
  validates_presence_of :email, :password
  validates_uniqueness_of :email

  has_many :orders
  has_one :supplier
  has_one :customer
end
