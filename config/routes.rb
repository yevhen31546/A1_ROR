Rails.application.routes.draw do
  get 'welcome/index'

  root 'welcome#index'

  resources :users
  get '/login' => 'users#login'
  get '/register' => 'users#register'
  get '/order' => 'users#order'
  get '/delivery' => 'users#delivery'
  get '/account_setting' => 'users#account_setting'
  get '/account_edit' => 'users#account_edit'
  get '/communication_settings' => 'users#communication_settings'
  get '/delivery_edit' => 'users#delivery_edit'
  get '/discount' => 'users#discount'
  get '/payment' => 'users#payment'
  get '/paymentA1card' => 'users#paymentA1card'
  get '/payment_method_edit1' => 'users#payment_method_edit1'
  get '/payment_method_edit2' => 'users#payment_method_edit2'
  get '/request_quote' => 'users#request_quote'
  get '/request_sent' => 'users#request_sent'

  resources :others
  get '/about' => 'others#about'
  get '/contact' => 'others#contact'
  get '/custom_sign' => 'others#custom_sign'
  get '/custom_sign2' => 'others#custom_sign2'
  get '/design' => 'others#design'
  get '/faq' => 'others#faq'
  get '/hoarding' => 'others#hoarding'
  get '/product' => 'others#product'

  resources :checkouts
  get '/business_login2' => 'checkouts#business_login2'
  get '/basket' => 'checkouts#basket'
  get '/business_login' => 'checkouts#business_login'
  get '/business_register' => 'checkouts#business_register'
  get '/checkout_a1' => 'checkouts#checkout_a1'
  get '/checkout_edit' => 'checkouts#checkout_edit'
  get '/checkout' => 'checkouts#checkout'
  get '/customer_register' => 'checkouts#customer_register'
  get '/order_successful' => 'checkouts#order_successful'
  get '/payment_failed' => 'checkouts#payment_failed'
  get '/soletrader_register' => 'checkouts#soletrader_register'
end
