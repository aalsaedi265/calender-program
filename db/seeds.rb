# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Stuff.destroy_all
 puts "cleared"

 u1=User.create(name:"big daddy chad")
 puts 'user'

 Stuff.create(goal:'hook up with the new hotty', user_id: u1.id)

 puts 'Stuffs'

 Stuff.create(goal:'bust inside the highschool bra', user_id: u1.id)


 puts 'finish'