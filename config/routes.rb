Rails.application.routes.draw do
  root 'pages#home'
  get 'analytics', to: 'analytics#index'

  namespace :api do
    namespace :v1 do
      get 'articles/search', to: 'search#index'
      get 'list_queries', to: 'search#list_queries'
    end
  end
end
