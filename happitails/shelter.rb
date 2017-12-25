class Shelter
  attr_accessor :name, :animals, :clients

  def initialize(name)
    @name = name
    @animals = []
    @clients = []
  end

  def add_animal(new_animal)
    @animals.push(new_animal)
  end

  def delete_animal(old_animal)
    if @animals.include? old_animal
      @animals.delete(old_animal)
    else
      puts "#{old_animal} is not available."
    end
  end

  def add_client(new_client)
    @clients.push(new_client)
  end

  def delete_client(old_client)
    if @clients.include? old_client
      @clients.delete(old_client)
    else
      puts "#{old_client} is not available."
    end
  end

  def find_client(name)
    client_found = false
    @clients.each do |client|
      if client.name == name
        client_found = client
      end
    end
    return client_found
  end

  def find_animal(name)
    animal_found = false
    @animals.each do |animal|
      if animal.name == name
        animal_found = animal
      end
    end
    return animal_found
  end

end
