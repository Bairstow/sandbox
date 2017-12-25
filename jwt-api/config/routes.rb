Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :authenticate
      resources :user
    end
  end

  get '/' => 'pages#index'
end
