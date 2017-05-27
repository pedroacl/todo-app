class User < ApplicationRecord
  before_save { self.email = email.downcase }

  validates :name, presence: true, length: { in: 3..100 }
  validates :email, presence: true
  validates :created_at, presence: true
  validates :updated_at, presence: true

  has_many :todos, dependent: :destroy
end
