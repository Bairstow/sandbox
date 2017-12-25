class RenameTypeToNameInDishTypes < ActiveRecord::Migration
  def change
    rename_column :dish_types, :type, :name
  end
end
