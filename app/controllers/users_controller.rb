class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def search()
    render json: User.search(params[:search]).sort_by { |u| u.name }
  end

  def all()
    render json: User.all.sort_by { |u| u.name }
  end

  def root()
    render 'users/home'
  end

end
