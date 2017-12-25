class Client
  attr_accessor :name, :num_children, :age, :pets

  def initialize(name, num_children, age)
    @name = name
    @num_children = num_children
    @age = age
    @pets = []
  end

  def add_pet(new_pet)
    pets.push(new_pet)
  end

  def delete_pet(old_pet)
    if @pets.include? old_pet
      @pets.delete(old_pet)
    else
      puts "#{old_pet} is not available."
    end
  end

  def find_pet(name)
    pet_found = false
    @pets.each do |pet|
      if pet.name == name
        pet_found = pet
      end
    end
    return pet_found
  end

end
