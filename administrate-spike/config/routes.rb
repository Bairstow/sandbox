Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :token
    end
  end

  namespace :admin do
    resources :users
    root to: "users#index"
  end

  get '/' => 'pages#index'
  get '/login' => 'pages#login'
  get '/test' => 'pages#test'
end
