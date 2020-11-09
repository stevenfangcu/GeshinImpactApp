class Character < ApplicationRecord
  has_many :guides

  before_create :slugify
  def slugify
    self.slug = name.parameterize
  end

end
