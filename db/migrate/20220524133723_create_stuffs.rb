class CreateStuffs < ActiveRecord::Migration[7.0]
  def change
    create_table :stuffs do |t|
      t.string :goal
      t.belongs_to :user
      t.timestamps
    end
  end
end
