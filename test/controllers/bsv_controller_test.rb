require "test_helper"

class BsvControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get bsv_home_url
    assert_response :success
  end
end
