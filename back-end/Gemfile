source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# Rails server and Database Helpers
gem 'rails', '~> 6.1.3'
gem 'puma', '~> 5.0'
# gem 'redis', '~> 4.0'
gem 'bcrypt', '~> 3.1.7'
gem 'pg', '~> 1.2', '>= 1.2.3'

# Facilities
gem 'devise'
gem 'business_process'
gem 'cpf_cnpj'
gem 'enumerize'
gem 'pg_search', '~> 2.3', '>= 2.3.5'

# API
gem 'active_model_serializers', '~> 0.10.0'
gem 'rack-cors', require: 'rack/cors'
gem 'pagy', '~> 3.2', '>= 3.2.1'
gem 'jbuilder', '~> 2.7'
gem 'oj'

# Tests Helper
gem 'faker', '~> 2.15', '>= 2.15.1'
gem 'cpf_faker', '~> 1.3'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.4', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'rspec-rails'
  gem 'factory_bot_rails'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
