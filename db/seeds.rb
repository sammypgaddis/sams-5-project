 # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating the customer"
Customer.create(name: 'Samuel Gaddis',
                username:'sammypgaddis',
                birthdate: '08-25-1995',
                password: 'azby1928')
puts "done creating the customer"

puts "creating the product"
Product.create(item_name:'21 oz. HydroFlask(red)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Snapper?qlt=70&wid=1100&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(laguna)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Laguna?qlt=70&wid=780&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(starfish)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Starfish?qlt=70&wid=1100&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(rain)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Rain?qlt=70&wid=1100&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(pacific)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Pacific?qlt=70&wid=780&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(stone)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Stone?qlt=70&wid=780&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(white)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_White?qlt=70&wid=780&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(black)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Black?qlt=70&wid=780&fmt=webp')
Product.create(item_name:'21 oz. HydroFlask(seagrass)',description: 'Keep life moving with our 21 oz bottle and Standard Flex Cap. It stashes easily into a small shoulder bag, your packs side pocket, or your car cup holder, and holds enough ice cold goodness to keep you going for hours without weighing you down. No wonder its one of our bestselling water bottles.',price: 34.95, likes: rand(1...100), image:'https://dks.scene7.com/is/image/GolfGalaxy/16HFLU21ZSTNDMTHFCAC_Seagrass?qlt=70&wid=780&fmt=webp')
puts "done creating the product"

puts "creating the order"
Order.create(customer_id:Customer.find_by(name: 'Samuel Gaddis').id, product_id:Product.find_by(item_name: '21 oz. HydroFlask(red)').id)
puts "done creating the order"
