# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

characters = Character.create([
  { name: 'Klee',
    #image_url: File.open(Rails.root.join("public/images/klee.jpg")),
    image_url: "https://i.ytimg.com/vi/C_duDk5e8yU/maxresdefault.jpg"
  }
  ])
guides = Guide.create([
  {
    title: "Klee's optimal build",
    description: "uhh idk",
    character: characters.first,
    score: "5"
  }
  ])
