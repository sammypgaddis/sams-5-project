class ProductsController < ApplicationController

    def index 
        products = Product.all 
        render json: products
    end

    def show 
        product= Product.find_by(id: params[:id])
        render json: product
    end
    def update
        productlike = Product.find_by(id: params[:id])
        if productlike 
            productlike .update(likes)
            render json: productlike 
        else
            render json: {error: 'Event not found'}, status: :not_found
        end
    end
end
