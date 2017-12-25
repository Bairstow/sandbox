class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def add_toy(new_toy)
    @toys.push(new_toy)
  end

  def delete_toy(old_toy)
    if @toys.include? old_toy
      @toys.delete(old_toy)
    else
      puts "#{old_toy} is not available."
    end
  end

end
