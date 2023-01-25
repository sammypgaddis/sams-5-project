class CustomersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def index 
        
        render json: Customer.all
    end

    def create 
        customer= Customer.create!(customer_params)
        session[:customer_id]= customer.id
        render json: customer, status: :created
    end

    def show
        customer=Customer.find_by(id: session[:customer_id])
        if customer 
            render json: customer
        else
            render json: {error: "user not found"}, status: :not_found
        end
    end

    def update
        customer = Customer.find_by(id: session[:customer_id])
    
        if customer
          render json: customer.update(customer_params) 
        else
          render json: customer.errors, status: :unprocessable_entity
        end
      end

    private

    def customer_params
        params.permit(:name, :birthdate, :username, :password)
    end
end
