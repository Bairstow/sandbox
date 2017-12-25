require './app'
require 'minitest/autorun'
require 'minitest/reporters' # optional

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

# test data
$test_shelter = Shelter.new("test_shelter")
$test_animals = [
  Animal.new('name_one', 1, 'm', 'species_one'),
  Animal.new('name_two', 2, 'f', 'species_two'),
  Animal.new('', '', '', '')
]
$test_clients = [
  Client.new('name_one', 1, 30),
  Client.new('name_two', 2, 40)
]


class HappitailsTest < MiniTest::Test
  # def initialize()
  #   @test_shelter = Shelter.new("test_shelter")
  #   @test_animals = [
  #     Animal.new('name_one', 1, 'm', 'species_one'),
  #     Animal.new('name_two', 2, 'f', 'species_two'),
  #     Animal.new('', '', '', '')
  #   ]
  #   @test_clients = [
  #     Client.new('name_one', 1, 30),
  #     Client.new('name_two', 2, 40),
  #     Client.new('', '', '')
  #   ]
  # end
  def test_add_existing_animal
    $test_shelter.add_animal($test_animals[0])
    assert_equal 1, $test_shelter.animals.length
  end
  def test_add_existing_client
    $test_shelter.add_client($test_clients[0])
    assert_equal 1, $test_shelter.clients.length
  end
  def test_shelter_find_animal
    $test_shelter.add_animal($test_animals[0])
    assert_equal $test_animals[0], $test_shelter.find_animal($test_animals[0].name)
  end
  def test_shelter_find_client
    $test_shelter.add_client($test_clients[0])
    assert_equal $test_clients[0], $test_shelter.find_client($test_clients[0].name)
  end
  def test_reject_invalid_animal
    $test_shelter.add_animal($test_animals[2])
    assert_equal 0, $test_shelter.animals.length
  end
  def test_reject_invalid_client
    $test_shelter.add_client($test_clients[2])
    assert_equal 0, $test_shelter.clients.length
  end
end
