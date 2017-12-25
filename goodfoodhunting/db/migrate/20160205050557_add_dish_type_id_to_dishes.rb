class AddDishTypeIdToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :dish_type_id, :string
  end
end
