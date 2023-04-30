class UserSerializer
  def initialize(user)
    @user = user
  end

  def serialize
    {
      id: @user.id,
      name: @user.name,
      email: @user.email,
      customer_id: @user.customer_id,
      supplier_id: @user.supplier_id,
      phone: @user.phone,
      role: @user.role,
    }
  end
end
