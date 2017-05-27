require 'rails_helper'

RSpec.feature "Creating Recipes" do
  scenario "A user creates a new recipes" do
    visit "/recipes"
  end
end
