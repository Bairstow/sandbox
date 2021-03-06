Rails.application.routes.draw do
  # get '/' => 'dishes#index'
  # get '/dishes/new' => 'dishes#new'
  # post '/dishes' => 'dishes#create'
  # get '/dishes/:id' => 'dishes#show'
  # get '/dishes/:id/edit' => 'dishes#edit'
  # patch '/dishes/:id' => 'dishes#update'
  # delete '/dishes/:id' => 'dishes#destroy'

  get '/' => 'pages#home'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  get '/logout' => 'session#destroy'

  get '/dishes/:id' => 'pages#show_dish'

  namespace :admin do

    resources :dishes
    resources :users
    resources :likes

    get '/dashboard' => 'dashboard#index'

    # get '/' => 'dishes#index' is the same as
    root 'dashboard#index'

  end

  namespace :api do

    resources :dishes do
      resources :likes, only: [:create]
    end

  end

end
