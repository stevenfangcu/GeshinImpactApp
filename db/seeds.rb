# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

characters = Character.create([
  { name: 'Klee',
  image_url: "https://gamespot1.cbsistatic.com/uploads/scale_landscape/1552/15524586/3751356-genshin-impact-mihoyo-open-world-rpg-role-playing-ps4-nintendo-switch-pc-ios-android-new-update-klee-gacha-banner-wishes-primogems.jpg"
  }
  ])
guides = Guide.create([
  {
    title: "Klee's optimal build",
    description: "uhh idk",
    character: characters.first,
    score: "S"
  }
  ])
