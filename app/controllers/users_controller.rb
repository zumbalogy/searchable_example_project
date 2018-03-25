class UsersController < ApplicationController

  def search()
    render json: User.search(params[:search])
  end

  def all()
    render json: User.all
  end

  def root()
    render 'users/home'
  end

end
