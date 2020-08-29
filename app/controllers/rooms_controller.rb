class RoomsController < ApplicationController
  def index
    gon.sky_key = ENV['KEY']
  end
end
