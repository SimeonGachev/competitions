const http = require("http");
const port = 5000;

let shirts = [
  {
    id: 1,
    color: "red",
  },
  {
    id: 2,
    color: "white",
  },
  {
    id: 3,
    color: "yellow",
  },
  {
    id: 4,
    color: "blue",
  },
];

let jackets = [
  {
    id: 1,
    color: "white",
    size: "Large",
  },
  {
    id: 2,
    color: "green",
    size: "Large",
  },
  {
    id: 3,
    color: "red",
    size: "Small",
  },
  {
    id: 4,
    color: "black",
    size: "Small",
  },
];

let jeans = [
  {
    id: 1,
    color: "cyan",
    size: "Large",
  },
  {
    id: 2,
    color: "magneta",
    size: "Large",
  },
  {
    id: 3,
    color: "white",
    size: "Small",
  },
  {
    id: 4,
    color: "brown",
    size: "Small",
  },
];

const allItems = {
  shirts: shirts,
  jackets: jackets,
  jeans: jeans,
};

const updateElem = function (arr, id, updatedElements) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      for (let key in updatedElements) {
        arr[i][key] = updatedElements[key];
      }

      return;
    }
  }

  updatedElements = {
    id: id,
    ...updatedElements,
  };
  arr.push(updatedElements);
  arr.sort((a, b) => a.id - b.id);
};

const createElem = function (arr, id, newElements) {
  newElements = {
    id: id,
    ...newElements,
  };
  arr.push(newElements);
  arr.sort((a, b) => a.id - b.id);
};

const deleteElem = (arr, reqId) => {
  arr.splice(
    arr.findIndex(({ id }) => reqId === id),
    1
  );
};

const server = http.createServer((req, res) => {
  const endPoints = req.url.split("/");

  //check if there is at least 1 endpoint
  if (endPoints.length > 1) {
    const firstEndPoint = endPoints[1];

    //check if there is appropriate resource for the endpoint
    if (!(firstEndPoint in allItems)) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(
        JSON.stringify({ status: "error", message: "Reasource not found" })
      );
    } else {
      const items = allItems[firstEndPoint];

      //use methods for ALL elements from items
      if (endPoints.length === 2) {
        //all available methods for ALL elements from items
        switch (req.method) {
          case "GET":
            res.writeHead(200, { "Content-type": "application/json" });
            res.write(JSON.stringify(items));
            res.end();
            break;
          default:
            res.writeHead(404, { "Content-type": "application/json" });
            res.end(
              JSON.stringify({ status: "error", message: "Invalid Method" })
            );
            break;
        }
      }
      //use methods for specific Id
      else {
        const reqId = Number(endPoints[2]);
        const idExists = items.some(({ id }) => id === reqId);

        //methods that do not need information from the request body
        if (req.method === "GET" || req.method === "DELETE") {
          //check if the id exists
          if (!idExists) {
            res.writeHead(404, { "Content-type": "application/json" });
            res.end(
              JSON.stringify({ status: "error", message: "id does not exist" })
            );
          } else {
            //go through all of the methods individually
            switch (req.method) {
              case "GET":
                const item = items.find(({ id }) => id === reqId);
                res.writeHead(200, { "Content-type": "application/json" });
                res.write(JSON.stringify(item));
                res.end();
                break;
              case "DELETE":
                deleteElem(items, reqId);
                res.writeHead(200, { "Content-type": "application/json" });
                res.end(
                  JSON.stringify({
                    status: "success",
                    message: "Data deleted successfully",
                  })
                );
                break;
            }
          }
        }
        //methods that need information from the request body
        else if (req.method === "POST" || req.method === "PUT") {
          let data = "";
          const reqId = Number(req.url.split("/")[2]);

          req.on("data", (chunk) => {
            // Accumulate the incoming data chunks
            data += chunk;
          });

          req.on("end", () => {
            // Parse the data as JSON
            try {
              const jsonData = JSON.parse(data);

              //go through the methods individually
              switch (req.method) {
                case "POST":
                  if (idExists) {
                    res.writeHead(404, { "Content-Type": "application/json" });
                    res.end(
                      JSON.stringify({
                        status: "error",
                        message: "id already exists",
                      })
                    );
                  } else {
                    createElem(items, reqId, jsonData);
                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(
                      JSON.stringify({
                        status: "success",
                        message: "Data received successfully",
                      })
                    );
                  }
                  break;
                case "PUT":
                  updateElem(items, reqId, jsonData);
                  res.writeHead(200, { "Content-Type": "application/json" });
                  res.end(
                    JSON.stringify({
                      status: "success",
                      message: "Data received successfully",
                    })
                  );
              }
            } catch (error) {
              console.error("Error parsing JSON:", error);
              res.writeHead(400, { "Content-Type": "application/json" });
              res.end(
                JSON.stringify({
                  status: "error",
                  message: "Invalid JSON data",
                })
              );
            }
          });
        }
        //Methods that are not supported
        else {
          res.writeHead(404, { "Content-type": "application/json" });
          res.end(
            JSON.stringify({ status: "error", message: "Invalid Method" })
          );
        }
      }
    }
  }
});

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${port}`);
});
