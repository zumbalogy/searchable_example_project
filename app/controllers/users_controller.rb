class UsersController < ApplicationController

  def search()
    users = User.search(params[:search])
    puts params[:search]
    render json: users
  end

  def all
    users = User.all
    render json: users
  end
end
