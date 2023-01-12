class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_name, :quantity, :total_price_
  has_one :product 
  has_one :customer 
end
