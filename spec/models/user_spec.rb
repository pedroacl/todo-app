require 'rails_helper'

RSpec.describe User, type: :model do
  #Association test
  it { should have_many(:todos).dependent(:destroy) }

  #Validation tests
  it { should validate_presence_of :name }
  it { should validate_presence_of :email }
  it { should validate_presence_of :created_at }
  it { should validate_presence_of :updated_at }
end
