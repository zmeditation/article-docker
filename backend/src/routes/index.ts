import express, { Request, Response } from "express";
import { Article } from "../models";

const router = express.Router();

router.get(
  "/",
  async (request: Request, response: Response): Promise<Response> => {
    const allDogs = await Article.findAll();
    return response.status(200).json(allDogs);
  }
);

router.get("/:id", (request: Request, response: Response) => {
  Article.findByPk(request.params.id)
    .then((article) => {
      response.status(200).send(JSON.stringify(article));
    })
    .catch((err) => {
      response.status(500).send(JSON.stringify(err));
    });
});

//create article

router.put("/", (request: Request, response: Response) => {
  Article.create({
    title: request.body.title,
    content: request.body.content,
  })
    .then((article: any) => {
      response.status(200).send(JSON.stringify(article));
    })
    .catch((err) => {
      response.status(500).send(JSON.stringify(err));
    });
});

router.post("/:id", (request: Request, response: Response) => {
  const { title, content } = request.body || {};
  if (!title || !content) {
    response
      .status(400)
      .send({ message: "Article heading and content are required." });
    return;
  }

  Article.upsert({ id: request.params.id, title: title, content: content })
    .then((article) => {
      response.status(200).send(JSON.stringify(article));
    })
    .catch((err) => {
      response.status(500).send(JSON.stringify(err));
    });
});

router.delete("/:id", (request: Request, response: Response) => {
  Article.destroy({
    where: {
      id: request.params.id,
    },
  })
    .then(() => {
      response.status(200).send();
    })
    .catch((err: any) => {
      response.status(500).send(JSON.stringify(err));
    });
});

export { router };
