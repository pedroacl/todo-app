require 'rails_helper'

RSpec.describe Recipe, type: :model do
  #Association test
  
  #Validation tests
  it { should validate_presence_of :name }
  it { should validate_presence_of :description }
  it { should validate_presence_of :created_at }
  it { should validate_presence_of :updated_at }
end
