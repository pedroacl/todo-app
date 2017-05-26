RSpec.describe HomeController do
  describe "GET index" do
    it "renders a list o todos" do
      get :index
      expect(response).to render_template("index")
    end
  end
end
