class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :username
      t.date :birthdate
      t.string :password_digest

      t.timestamps
    end
  end
end
