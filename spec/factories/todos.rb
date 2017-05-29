FactoryGirl.define do
  factory :todo do
    name { Faker::StarWars.character }
    description { Faker::StarWars.quote }
  end
end
