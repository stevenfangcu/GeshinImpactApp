class GuideSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :character_id, :score
end
