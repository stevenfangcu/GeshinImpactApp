class CreateGuides < ActiveRecord::Migration[6.0]
  def change
    create_table :guides do |t|
      t.string :title
      t.string :description
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
