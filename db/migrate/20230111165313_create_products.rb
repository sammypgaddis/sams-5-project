class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :item_name
      t.string :description
      t.integer :price
      t.integer :likes 
      t.string :image 

      t.timestamps
    end
  end
end
