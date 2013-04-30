require 'simplecov'

ENV['RACK_ENV'] = 'test'

require File.expand_path('../../../app.rb', __FILE__)

Bundler.require :default, :test

require 'minitest/spec'
require 'minitest/autorun'
require 'minitest/pride'

Game.delete_all
User.delete_all

