require 'rails_helper'

RSpec.describe Todo, type: :model do
  # Association test
  it { should belong_to(:user) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it { should validate_presence_of(:created_at) }
  it { should validate_presence_of(:updated_at) }
end
