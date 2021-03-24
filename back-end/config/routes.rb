Rails.application.routes.draw do
  devise_for :requesters
  devise_for :companies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :lendings
      resources :requesters
      resources :credit_requests
    end
  end
end
