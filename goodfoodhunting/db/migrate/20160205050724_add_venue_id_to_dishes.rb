class AddVenueIdToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :venue_id, :string
  end
end
