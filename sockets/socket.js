const socketIO = require("socket.io");
const axios = require("axios"); // Import axios

function chat(server) {
  const io = socketIO(server);

  io.on("connection", function (socket) {
    console.log("a user connected");

    socket.on("question", (question) => {

    console.log(question)

      async function connect(){
      try {
      
        const mlApiResponse = await axios.post(
          socketq,
          {
            question:question
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(mlApiResponse.data); // Assuming the response is JSON
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
            socketd
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
