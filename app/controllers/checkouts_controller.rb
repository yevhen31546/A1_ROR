class CheckoutsController < ApplicationController
    def basket
        render :basket
    end

    def business_login
        render :business_login
    end

    def business_login2
        render :business_login2
    end

    def business_register
        render :business_register
    end

    def checkout
        render :checkout
    end

    def checkout_a1
        render :checkout_a1
    end

    def checkout_edit
        render :checkout_edit
    end

    def customer_register
        render :customer_register
    end

    def order_successful
        render :order_successful
    end
    
    def payment_failed
        render :payment_failed
    end

    def soletrader_register
        render :soletrader_register
    end

    
end
