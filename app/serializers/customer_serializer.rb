class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate, :last_order
  has_many :products 
  has_many :orders

  def last_order
    self.object.products.last
    #self.object is the same as Customer.first.
    #self.object.products.last = Customer.first.products.last
  end
end
