class RoomChannel < ApplicationCable::Channel
  def subscribed
    # フロントとバックがお互い監視しており、反応があればこれが作動する
    stream_from "room_channel"
    
    p('ok')
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # フロントのアクションを検知して作動
    Message.create(content:data['message'])
    ActionCable.server.broadcast 'room_channel', data['message']
  end
end
