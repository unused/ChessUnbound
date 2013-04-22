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


