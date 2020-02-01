class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.text :image
      t.text :title
      t.text :comment
      t.text :content
      t.timestamps
    end
  end
end
