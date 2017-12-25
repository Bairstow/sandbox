class DropLicksTable < ActiveRecord::Migration
  def change
    drop_table :licks
  end
end
