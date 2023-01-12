class CustomersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def index 
        
        render json: Customer.all
    end

    def create 
        customer= Customer.create!(customer_params)
        session[:user_id]= user.id
        render json: customer, status: :created
    end

    def show
        customer=Customer.find_by(id: session[:user_id])
        if customer 
            render json: customer
        else
            render json: {error: "user not found"}, status: :not_found
        end
    end

    private

    def customer_params
        params.permit(:username, :password)
    end
end
