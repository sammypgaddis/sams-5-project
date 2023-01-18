class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate
  has_many :products 
  has_many :orders
end
