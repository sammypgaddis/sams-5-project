class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def show
        customer_logged_in = Customer.find_by_id(session[:user_id])
        render json: customer_logged_in
    end

    def create
        customer = Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: customer, status: :created
        else
            render json: { error: ["invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
