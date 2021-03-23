Rails.application.routes.draw do
  devise_for :requesters
  devise_for :companies
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :lendings do
        collection do
          get :index_all, controller: :points, action: :index_all
          get :get_pdf, controller: :points, action: :get_pdf
        end
      end
    end
  end
end
