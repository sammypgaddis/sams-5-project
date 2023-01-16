class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def show
        customer_logged_in = Customer.find_by_id(session[:customer_id])
        render json: customer_logged_in
    end

    def create
        customer = Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id
            render json: customer, status: :created
        else
            render json: { error: ["invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :customer_id
        head :no_content
    end

end
