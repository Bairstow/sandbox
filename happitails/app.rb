require 'pry'
require './animal.rb'
require './client.rb'
require './shelter.rb'

# test_animal = Animal.new('Rufus', 12, 'm', 'Bulldog')
# test_client = Client.new('John Smith', 2, 45)
# test_shelter = Shelter.new('Happitails')
#
# test_animal.add_toy('Rope')

def prompt_break
  puts "============================================"
end

def prompt_new_animal
  puts "Entering a new animal into the system..."
  print "Enter the name of the animal: "
  name = gets.chomp
  print "Enter the age of the animal: "
  age = gets.chomp
  print "Enter the gender of the animal (m/f): "
  gender = gets.chomp
  print "Enter the species of the animal: "
  species = gets.chomp
  return Animal.new(name, age, gender, species)
end

def prompt_new_client
  puts "Entering a new client to the system..."
  print "Enter the name of the client: "
  name = gets.chomp
  print "Enter the clients number of children: "
  num_children = gets.chomp
  print "Enter the clients age: "
  age = gets.chomp
  return Client.new(name, num_children, age)
end

def display_animals(animals)
  animals.each.with_index do |animal, i|
    prompt_break
    puts "** #{i + 1}. #{animal.name} **"
    puts "Age: #{animal.age}"
    puts "Gender: #{animal.gender}"
    puts "Species: #{animal.species}"
    puts "Current toys: "
    if animal.toys.length == 0
      puts " - None :("
    else
      animal.toys.each do |toy|
        puts " - #{toy}"
      end
    end
  end
end

def display_clients(clients)
  clients.each.with_index do |client, i|
    prompt_break
    puts "** #{i + 1}. #{client.name} **"
    puts "Age: #{client.age}"
    puts "Number of children: #{client.num_children}"
    puts "Current pets: "
    if client.pets.length == 0
      puts " - None"
    else
      client.pets.each do |pet|
        puts " - #{pet.name} a #{pet.species}"
      end
    end
  end
end

def new_adoption(shelter)
  prompt_break
  puts "Enter the following details to process a new adoption."
  print "Enter the name of the client who wishes to adopt: "
  client_name = gets.chomp
  until client = shelter.find_client(client_name)
    print "Enter the name of the client who wishes to adopt: "
    client_name = gets.chomp
  end
  print "Enter the name of the animal they wish to adopt: "
  animal_name = gets.chomp
  until animal = shelter.find_animal(animal_name)
    print "Enter the name of the animal they wish to adopt: "
    animal_name = gets.chomp
  end
  puts "Congratulations #{client.name} has adopted #{animal.name}!"
  client.pets.push(animal)
  shelter.animals.delete(animal)
end

def new_unadoption(shelter)
  prompt_break
  puts "You heartless bastard."
  puts "Enter the following details to process unadoption."
  print "Enter the name of the bastard unadopting: "
  client_name = gets.chomp
  until client = shelter.find_client(client_name)
    print "Enter the name of the bastard unadopting: "
    client_name = gets.chomp
  end
  print "Enter the name of the animal they wish to abandon: "
  animal_name = gets.chomp
  until animal = client.find_pet(animal_name)
    print "Enter the name of the animal they wish to abandon: "
    animal_name = gets.chomp
  end
  puts "#{client.name}, leave #{animal.name} with us and get the hell out!"
  shelter.animals.push(animal)
  client.pets.delete(animal)
end

def prompt_menu(shelter)
  continue = true
  prompt_break
  puts "Welcome to #{shelter.name} adoption shelter"
  prompt_break
  puts "1. Display all animals"
  puts "2. Display all clients"
  puts "3. Enter a new animal to the system"
  puts "4. Enter a new client to the system"
  puts "5. Adopt an animal"
  puts "6. Put an animal up for adoption"
  puts "7. Exit the system."
  print "Select a navigation option: "
  selection = gets.chomp.to_i
  prompt_break
  case selection
  when 1
    display_animals(shelter.animals)
  when 2
    display_clients(shelter.clients)
  when 3
    shelter.add_animal(prompt_new_animal)
  when 4
    shelter.add_client(prompt_new_client)
  when 5
    new_adoption(shelter)
  when 6
    new_unadoption(shelter)
  when 7
    continue = false
  else
    puts "Not a valid navigation option."
  end
  return continue
end

# while prompt_menu(happitails) do
#   puts " "
# end

puts "So long amigo."

# binding.pry
