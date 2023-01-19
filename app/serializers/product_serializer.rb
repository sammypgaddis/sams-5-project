class ProductSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description, :price, :image
  # has_many :products
end
