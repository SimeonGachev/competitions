exports.getter = function (req, res, allItems) {
  const endPoints = req.url.split("/");

  let currItem = allItems;
  for (let i = 1; i < endPoints.length; i++) {
    const item = endPoints[i];
    if (item === "") {
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(JSON.stringify(currItem));
      res.end();
      return;
    } else if (!(item in currItem)) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(
        JSON.stringify({ status: "error", message: "Reasource not found" })
      );
      return;
    }
    currItem = currItem[item];
  }
  res.writeHead(200, { "Content-type": "application/json" });
  res.write(JSON.stringify(currItem));
  res.end();
};

exports.poster = function (req, res, allItems) {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    try {
      const jsonData = JSON.parse(data);
      const endPoints = req.url.split("/");

      let currItem = allItems;
      for (let i = 1; i < endPoints.length; i++) {
        const item = endPoints[i];
        if (i === endPoints.length - 1) {
          if (item in currItem) {
            res.writeHead(404, { "Content-type": "application/json" });
            res.end(
              JSON.stringify({
                status: "error",
                message: "Reasource already exists",
              })
            );
            return;
          }
          currItem[item] = jsonData;
          res.writeHead(201, { "Content-type": "application/json" });
          res.end(
            JSON.stringify({
              status: "success",
              message: "Data received successfully",
            })
          );
        }
        if (!(item in currItem)) {
          res.writeHead(404, { "Content-type": "application/json" });
          res.end(
            JSON.stringify({ status: "error", message: "Reasource not found" })
          );
          return;
        }
        currItem = currItem[item];
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
};

exports.putter = function (req, res, allItems) {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    try {
      const jsonData = JSON.parse(data);
      const endPoints = req.url.split("/");

      let currItem = allItems;
      for (let i = 1; i < endPoints.length; i++) {
        const item = endPoints[i];
        if (i === endPoints.length - 1) {
          currItem[item] = jsonData;
          res.writeHead(200, { "Content-type": "application/json" });
          res.end(
            JSON.stringify({
              status: "success",
              message: "Data received successfully",
            })
          );
        }
        if (!(item in currItem)) {
          res.writeHead(404, { "Content-type": "application/json" });
          res.end(
            JSON.stringify({ status: "error", message: "Reasource not found" })
          );
          return;
        }
        currItem = currItem[item];
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
};

exports.deleter = function (req, res, allItems) {
  const endPoints = req.url.split("/");

  let currItem = allItems;
  let prevItem = allItems;
  for (let i = 1; i < endPoints.length; i++) {
    const item = endPoints[i];
    if (!(item in currItem)) {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end(
        JSON.stringify({ status: "error", message: "Reasource not found" })
      );
      return;
    }
    if (i === endPoints.length - 1) {
      delete prevItem[item];
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(
        JSON.stringify({
          status: "success",
          message: "Data deleted successfully",
        })
      );
    }
    prevItem = currItem;
    currItem = currItem[item];
  }
};
