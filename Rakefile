require File.expand_path('../config/config.rb', __FILE__)

require 'rake/testtask'
require 'cucumber/rake/task'

task :default => 'features'

task :features do
  Rake::Task["features:client"].invoke
  Rake::Task["features:server"].invoke
end


Rake::TestTask.new do |t|
  t.libs << "test"
  t.test_files = FileList['server/test/*_test.rb']
  t.verbose = false
end

namespace :features do
  Cucumber::Rake::Task.new(:client) do |t|
    t.profile = "client"
  end

  Cucumber::Rake::Task.new(:server) do |t|
    t.profile = "server"
  end
end

namespace :db do
  task :create_indexes, :env do |t, args|
    unless args[:env]
      puts "Must provide an environment"
      exit
    end

    Mongoid.load!('server/config/mongoid.yml', args[:env])

    require File.join(File.dirname(__FILE__), "server/app/models/user.rb")
    require File.join(File.dirname(__FILE__), "server/app/models/game.rb")

    Game.create_indexes
    User.create_indexes
  end
end


