import express from "express";
import bodyParser from "body-parser";
import categoryRoutes from "./api_categories";

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/categories", categoryRoutes);

//   server.get('/', indexController)

//   server.get('/styles.css', stylesController)

//   server.get('/lebenslauf', lebenslaufController)

//   server.get('/contact', contactStartController)

//   server.get('/save', contactController)

//   server.post('/save', contactController)

server.listen(8040, () => console.log("server started"));
