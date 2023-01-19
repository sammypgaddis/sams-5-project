class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_name, :quantity
  has_one :product 
  has_one :customer 
end
