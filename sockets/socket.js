const socketIO = require("socket.io");
const axios = require("axios"); // Import axios

function chat(server) {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*', // Replace with your frontend URL
      methods: ['GET', 'POST'],
    },
  });

  io.on("connection", function (socket) {
    console.log("a user connected");

    socket.on("question", (question) => {
      async function connect(){
      try {
      
        const mlApiResponse = await axios.post(
          process.env.socketq,
          {
            question:question
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
       mlApiResponse.data.chat
      } catch (error) {
        console.error("Error processing question:", error.message);
      }
    }
    connect()
    });

    socket.on("dissconnect", async function () {

        async function dissconect(){
          try{
          const mlApiResponse = await axios.delete(
            process.env.socketd
          );
          return mlApiResponse.data
        }
        catch(err)
        {
        console.error("Error processing question:", error.message);
        }
      }
       const data= await dissconect()
       if(data.message=="Chat history deleted successfully")
      console.log("user disconnected and chat history deleted");
    });
  });
}

module.exports = {
  chat
};
