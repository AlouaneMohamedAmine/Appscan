// Controller
const models = require("../models");

const browse = (req, res) => {
  models.chapters
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;

  models.chapters
    .find(id)
    .then(([results]) => {
      if (results[0]) res.send(results[0]);
      else res.json({ status: "success" }).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.json({ status: "failed" }).sendStatus(500);
    });
};

const add = (req, res) => {
  const chapter = req.body;
  models.chapters
    .insert(chapter)
    .then(([result]) => {
      res.status(201).json({ status: "success" });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const chapter = req.body;
  chapter.id = parseInt(req.params.id, 10);

  models.chapters
    .update(chapter)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

// Méthode pour supprimer un chapitre existant
const destroy = (req, res) => {
  const { id } = req.params;

  models.chapters
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

// Renvoie les chapitres les plus vus aujourd'hui
const mostViewedToday = (req, res) => {
  chapters.getMostViewedToday()
    .then(([results]) => {
      res.send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Renvoie les chapitres les plus vus cette semaine
const mostViewedWeek = (req, res) => {
  chapters.getMostViewedWeek()
    .then(([results]) => {
      res.send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Renvoie les chapitres les plus vus ce mois
const mostViewedMonth = (req, res) => {
  chapters.getMostViewedMonth()
    .then(([results]) => {
      res.send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Renvoie les chapitres les plus aimés
const mostLiked = (req, res) => {
  chapters.getMostLiked()
    .then(([results]) => {
      res.send(results);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
  mostViewedToday,
  mostViewedWeek,
  mostViewedMonth,
  mostLiked
};