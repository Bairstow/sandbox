class RenameLocationToNameInVenues < ActiveRecord::Migration
  def change
    rename_column :venues, :location, :name
  end
end
