class ProductSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price
  has_many :products
end
