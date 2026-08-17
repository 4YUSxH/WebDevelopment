<!-- Read SocketIo docs for great understanding -->

// Use Postman and Echo API for testing

1. Socket.io is used for communication between two or more users and it is optimized than traditional HTTP communication by maintaining constant connection between Users and Server, unlike in HTTP connection is after req-res cycle for getting new information from server user has to make another req which is time taking and create unnecessarily load on server by making requests on server again again, like both user has to make request to server repetitively for checking new message 

Socket.IO is a library that enables real-time, two-way communication between a client and a server. It is commonly used when the server needs to send data to the client immediately without the client having to repeatedly request it.
Ex- 
User A                 Server                 User B
  |                       |                       |
  |--- message ---------->|                       |
  |                       |--- message ---------->|
  |                       |                       |

With a traditional HTTP request-
Client ───── Request ─────> Server
Client <──── Response ───── Server
The request/response cycle finishes after the response is sent. If the client wants new information later, it generally needs to make another request.

With Socket.IO, a persistent connection is established between the client and server (typically using WebSocket when available)-
Client <=================> Server
          connection

Now either side can send data when needed-
Client ────────────────> Server
Client <─────────────── Server
Client ────────────────> Server
Client <─────────────── Server

2. SocketIo use cases: 
    Chat applications
    Notifications
    Online games
    Live location tracking
    Real-time dashboards
    Online user status

3. ***Imp: Whenever you see 'io' it means 'server'
   and whenever you see 'socket' it means 'single user'

4. SocketIo is event driven library, means it will communicate on the basis of events, event means when a particular condition is triggered then it will produce some output hence it do event based communication

5. ***Imp: on -> Event ko listen karna, kuch event hone par uss event ke bas par kuch karna 
        emit -> Event ko fire karna, 

6. Learn from docs: Events, Adapters > Intro + Redis adapter, Server > Middlewares, Clients > The socket.io instance, Advanced, Mis > Engine.io(How socket.io works)

- socket.emit() 
- socket.broadcast().emit() 
- io.emit()