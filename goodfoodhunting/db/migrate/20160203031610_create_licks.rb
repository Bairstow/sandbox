class CreateLicks < ActiveRecord::Migration
  def change
    create_table :licks do |t|
      t.references :dish, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
