# == Schema Information
#
# Table name: suppliers
#
#  id          :bigint           not null, primary key
#  name        :string
#  address1    :string
#  address2    :string
#  country     :string
#  city        :string
#  phone       :string
#  user_id     :integer 
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Supplier < ApplicationRecord
    has_one :address
end
