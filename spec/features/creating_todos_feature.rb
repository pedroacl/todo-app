require "rails_helper"

RSpec.feature "Creating Todos" do
  scenario "A user creates a new todo" do
    visit "/"
    click_link "New Todo"
    fill_in "Title", with: "Creating a todo"
  end
end
