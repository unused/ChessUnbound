# Clear before database scenario
Before('@clean_database') do
  Game.delete_all
  User.delete_all
end

