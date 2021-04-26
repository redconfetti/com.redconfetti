#!/usr/bin/env ruby

require 'sinatra'
require 'json'

set :port, 5000

post '/' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  puts "payload_body: #{payload_body}"
  push = JSON.parse(payload_body)
  # puts "JSON: #{push.inspect}"
  if (push['repository']['full_name'])
    puts "it is the correct repository: #{push['repository']['full_name']}"
  end
end

def verify_signature(payload_body)
  puts "ENV['SECRET_TOKEN']: #{ENV['SECRET_TOKEN'].inspect}"
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end


