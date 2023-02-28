module Api
  class UsersController < ApplicationController
    def index
      users = User.all.map do |user|
        {
          name: user.first_name,
          email: user.email,
          phone: user.phone,
          most_recent_order: most_recent_order(user),
          order_payment_state: order_payment_state(user),
        }
      end
      render(json: { users: user })
    end

    def most_recent_order(user)
      user.orders.order("created_at").last.price
    end

    def order_payment_state(user)
      user.orders.order("created_at").last.payment_state
    end
  end
end
