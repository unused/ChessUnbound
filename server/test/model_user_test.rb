
require File.expand_path('../helper/bootstrap.rb', __FILE__)

describe User do

  it "has simple json structure" do
		data = { key: "1234509876", username: "Alfons" }
		user = User.new(data)
		user.to_json.must_equal data.to_json
  end

  it "does generate unique entities" do
    user = User.generate
    another_user = User.generate
    user.username.wont_equal another_user.username
    user.key.wont_equal another_user.key
  end

end

