import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "reda" },
  { id: 2, name: "hamza" },
  { id: 3, name: "yassine" },
];
const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-type", "application/json");

    if (user) {
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "user not found" }));
      res.end();
    }
    res.end();
  } else {
    res.setHeader("Content-type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "ROute not found" }));
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
