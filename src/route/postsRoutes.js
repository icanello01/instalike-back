import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadIMagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})
//Linux ou Mac
//const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    // Habilita o middleware JSON para que o Express possa interpretar dados JSON nas requisições
    app.use(express.json());
    app.use(cors(corsOptions));
    // Define uma rota para lidar com requisições GET para a URL "/posts"
    app.get("/posts", listarPosts);
    //Rota para criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadIMagem)

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;

