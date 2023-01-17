# == Schema Information
#
# Table name: customers
#
#  id                   :integer          not null, primary key
#  email                :string
#  phone                :string
#  verified             :boolean          default(FALSE)
#  location_id          :integer
#  user_id              :integer
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  name                 :string

class Customer < ApplicationRecord
    has_many :addresses
    has_many :products
    has_many :orders
    has_one  :address
    belongs_to :user, optional: true
    validates :name, presence: true # , format: { with: /\A[a-zA-Z\s]+\z/, message: I18n.t('customer.errors.messages.only_letters') }

    validates :email, format: { with: /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/ }
  

end
