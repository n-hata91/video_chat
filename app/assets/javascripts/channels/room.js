App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function () {
    // バックエンド側とコネクト出来た場合発火
    // Called when the subscription is ready for use on the server
  },

  disconnected: function () {
    // Called when the subscription has been terminated by the server
  },

  received: function (message) {
    // バックエンドからの情報をリアルタイムでフロントへ表示する
    const messages = document.getElementById('messages')
    messages.innerHTML += `<li class="list-group-item"><p class="card-text">${message}</p></li>`
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function (content) {
    return this.perform('speak', { message: content }); //room_channel.rbのspeakメソッドを実行させる
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('chat-input')
  const button = document.getElementById('button')
  button.addEventListener('click', function () {
    const content = input.value
    App.room.speak(content)
    input.value = ''
  })
})