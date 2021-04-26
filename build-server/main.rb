#!/usr/bin/env ruby

require 'sinatra'
require 'json'

post '/build-site' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end


