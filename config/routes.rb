Rails.application.routes.draw do
  
  resources :orders
  resources :customers
  resources :products

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/user_logged_in", to: "sessions#show"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
