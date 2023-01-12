class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :birthdate, :password_digest
  has_many :products 
  has_many :orders
end
