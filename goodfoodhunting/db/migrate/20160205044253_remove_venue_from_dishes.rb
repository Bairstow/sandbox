class RemoveVenueFromDishes < ActiveRecord::Migration
  def change
    remove_column :dishes, :venue
  end
end
