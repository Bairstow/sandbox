class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.string :name
      t.text :image_url
      t.string :venue

      t.timestamps null: false
    end
  end
end
