# == Schema Information
#
# Table name: addresses
#
#  id               :integer          not null, primary key
#  street           :string(255)
#  city             :string(255)
#  zip              :string(255)
#  created_at       :datetime
#  updated_at       :datetime
#  lat              :float
#  lng              :float

class Address < ApplicationRecord
    belongs_to :customer
end
