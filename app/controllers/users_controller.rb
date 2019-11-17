class UsersController < ApplicationController
    def index
    end

    def login
        render :login
    end

    def register
        render :register
    end

    def order
        render :order
    end

    def delivery
        render :delivery
    end

    def account_setting
        render :account_setting
    end

    def account_edit
        render :account_edit
    end
    
    def communication_setting
        render :communication_setting
    end

    def delivery_edit
        render :delivery_edit
    end

    def delivery_count
        render :delivery_count
    end

    def discount
        render :discount
    end
    
    def payment
        render :payment
    end

    def paymentA1card
        render :paymentA1card
    end

    def payment_method_edit1
        render :payment_method_edit1
    end

    def payment_method_edit2
        render :payment_method_edit2
    end

    def request_quote
        render :request_quote
    end

    def request_sent
        render :request_sent
    end


    
end
