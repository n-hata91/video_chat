class RoomsController < ApplicationController
  def index
    @messages = Message.all
    gon.sky_key = ENV['KEY']
  end
end
