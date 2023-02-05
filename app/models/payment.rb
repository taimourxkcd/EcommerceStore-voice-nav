# == Schema Information
#
# Table name: payments
#
#  id                       :integer          not null, primary key
#  order_id                 :integer
#  amount                   :decimal(10, 2)
#  status                   :string(255)
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  transaction_log          :text
#  transaction_id           :string
#  currency                 :string(3)
#  card_number              :string
#
class Payment < ApplicationRecord
      belongs_to :order, optional: true
end
