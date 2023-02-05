# == Schema Information
#
# Table name: locations
#
#  id                        :integer          not null, primary key
#  name                      :string(255)
#  created_at                :datetime
#  updated_at                :datetime
#  user_id                   :integer
#  lat                       :float
#  lng                       :float
#  description               :text
#  country                   :string
#
class Location < ApplicationRecord
     has_many :orders, dependent: :destroy, inverse_of: :location
end
