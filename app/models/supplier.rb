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
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Supplier < ApplicationRecord
    belongs_to :location
end
