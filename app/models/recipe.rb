class Recipe < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, length: { in: 3..100 }
  validates :description, presence: true, length: { maximum: 500 }
  validates :user_id, presence: true
  validates :created_at, presence: true
  validates :updated_at, presence: true
end
