class Todo < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :created_at, presence: true
    validates :updated_at, presence: true

    belongs_to :user
end
