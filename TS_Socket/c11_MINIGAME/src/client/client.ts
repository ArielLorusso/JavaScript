type ChatMessage = {
    message: string
    from: string
}

class Client {
    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = io()

        this.socket.on('connect', function () {
            console.log('connect')
        })

        this.socket.on('disconnect', function (message: any) {
            console.log('disconnect ' + message)
            location.reload()
        })

        this.socket.on('chatMessage', (chatMessage: ChatMessage) => {
            $('#messages').append(
                "<li><span class='float-right'><span class='circle'>" +
                    chatMessage.from +
                    "</span></span><div class='otherMessage'>" +
                    chatMessage.message +
                    '</div></li>'
            )
            this.scrollChatWindow()
        })

        $(document).ready(() => {
            $('#messageText').keypress((e) => {
                var key = e.which
                if (key == 13) {
                    // the enter key code
                    this.sendMessage()
                    return false
                }
            })
        })
    }

    private scrollChatWindow = () => {
        $('#messages').animate(
            {
                scrollTop: $('#messages li:last-child').position().top,
            },
            500
        )
        setTimeout(() => {
            let messagesLength = $('#messages li')
            if (messagesLength.length > 10) {
                messagesLength.eq(0).remove()
            }
        }, 500)
    }

    public sendMessage() {
        let messageText = $('#messageText').val()
        if (messageText.toString().length > 0) {
            this.socket.emit('chatMessage', <ChatMessage>{
                message: messageText,
                from: 'AB',
            })

            $('#messages').append(
                "<li><span class='float-left'><span class='circle'>AB</span></span><div class='myMessage'>" +
                    messageText +
                    '</div></li>'
            )
            this.scrollChatWindow()

            $('#messageText').val('')
        }
    }

    public showGame(id: number) {
        switch (id) {
            case 0:
                $('#gamePanel1').fadeOut(100)
                $('#gamePanel2').fadeOut(100)
                $('#gamePanel0').delay(100).fadeIn(100)
                break
            case 1:
                $('#gamePanel0').fadeOut(100)
                $('#gamePanel2').fadeOut(100)
                $('#gamePanel1').delay(100).fadeIn(100)
                break
            case 2:
                $('#gamePanel0').fadeOut(100)
                $('#gamePanel1').fadeOut(100)
                $('#gamePanel2').delay(100).fadeIn(100)
                break
        }
    }
}

const client = new Client()