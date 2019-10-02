# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course = Course.create(title: 'Hello World of Painting', description: ' Create amazing painting with Bob Ross')

section = Section.create(title: 'Chapter 1', course: course)

episodes = Episode.create([
	{  title: '1. Paint Structure', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ziBFh3V1aM ', section: section },
	{  title: '2. Paint Anatomy', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ziBFh3V1aM ', section: section },
	{  title: '3. Paint Head', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ziBFh3V1aM ', section: section },
	{  title: '4. Paint Hands', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ziBFh3V1aM ', section: section },
])