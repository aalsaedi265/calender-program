class CreateObjectives < ActiveRecord::Migration[7.0]
  def change
    create_table :objectives do |t|
      t.string :item
      t.belongs_to :user
      t.timestamps
    end
  end
end
