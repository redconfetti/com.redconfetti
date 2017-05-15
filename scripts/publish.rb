# Bucket ARN
# arn:aws:s3:::redconfetti

require 'rubygems'
require 'bundler/setup'
require 'yaml'
require 's3'

config = YAML.load_file('./config/application.yml')
amazon_config = {
  :access_key_id => config['amazon_s3_access_key_id'],
  :secret_access_key => config['amazon_s3_secret_access_key']
}
service = S3::Service.new(amazon_config)

site_bucket = service.buckets.find(config['amazon_s3_bucket_name'])
puts "site bucket objects: #{site_bucket.objects.inspect}"