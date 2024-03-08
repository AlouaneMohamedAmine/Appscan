const express = require("express");

const router = express.Router();
const multer = require("multer");


const uploadAvatar = multer({ dest: process.env.AVATAR_DIRECTORY });
const uploadChapter = multer({ dest: process.env.CHAPTER_DIRECTORY });
const uploadCoverImage = multer({ dest: process.env.COVER_IMAGE_DIRECTORY });

const { hashPassword, verifyPassword, } = require("../auth");

const authControllers = require("./controllers/authControllers");
const fileControllers = require("./controllers/fileControllers");
const genreControllers = require("./controllers/genreControllers");
const userlibraryControllers = require("./controllers/userlibraryControllers");
const themeControllers = require("./controllers/themeControllers");
const userControllers = require("./controllers/userControllers");
const manhwaControllers = require("./controllers/manhwaControllers");
const commentControllers = require("./controllers/commentControllers");
const chapterControllers = require("./controllers/chapterControllers");


// Authentification

router.post("/api/register", hashPassword, userControllers.add);
router.post("/api/login", authControllers.getUserByEmailWithPasswordAndPassToNext, verifyPassword);

// Gestion des users
router.get("/api/users", userControllers.browse); // manque l'avatar
router.get("/api/users/:id", userControllers.read); // manque l'avatar et is_admin
router.put("/api/users/:id",  userControllers.edit);
router.delete("/api/users/:id",  userControllers.destroy);

// Gestion des avatars
router.post("/api/avatars",uploadAvatar.single("avatar"),fileControllers.renameAvatar,fileControllers.updateAvatar);
  router.get("/api/avatars/:fileName",hashPassword,fileControllers.sendAvatar);
  router.delete("/api/avatars/:fileName",hashPassword,fileControllers.deleteAvatar);


// Gestion des cover de manhwa

router.post('/api/coverImage',  uploadCoverImage.single('cover_image'),fileControllers.renameCoverImage);
router.get('/api/coverImage/:fileName', fileControllers.sendCoverImage);
router.put('/api/coverImage/:id',  fileControllers.updateCoverImage);
router.delete('/api/coverImage/:fileName',  fileControllers.deleteCoverImage);
 
 
// Gestion des manhwa

router.get('/api/manhwas', manhwaControllers.browse);
router.get('/api/manhwas/:id', manhwaControllers.read);
router.post('/api/manhwas',  manhwaControllers.add);
router.put('/api/manhwas/:id',  manhwaControllers.edit);
router.delete('/api/manhwas/:id',  manhwaControllers.destroy);

// Gestion des chapitres

router.post("/api/chapter/rename",  uploadChapter.single('chapter'),fileControllers.renameChapter);
router.get("/api/chapter/:fileName", fileControllers.updateChapter);
router.delete("/api/chapter/:fileName",  fileControllers.deleteChapter);
router.get('/api/chapters/most-viewed-today', chapterControllers.mostViewedToday);
router.get('/api/chapters/most-viewed-week', chapterControllers.mostViewedWeek);
router.get('/api/chapters/most-viewed-month', chapterControllers.mostViewedMonth);
router.get('/api/chapters/most-liked', chapterControllers.mostLiked);

// Gestion des genres

router.get('/api/genres', genreControllers.getAllGenres);
router.post('/api/genres', /**/ genreControllers.insertGenre);
router.put('/api/genres/:id',  genreControllers.updateGenre);
router.delete('/api/genres/:id',  genreControllers.deleteGenre);

// Gestion de la bibliothèque

router.get('/userlibrary', userlibraryControllers.browse);
router.get('/userlibrary/:user_id/:manhwa_id', userlibraryControllers.read);
router.post('/userlibrary', userlibraryControllers.add);
router.delete('/userlibrary/:user_id/:manhwa_id', userlibraryControllers.destroy);


// Gestion des themes

router.get('/themes', themeControllers.browse);
router.get('/themes/:id', themeControllers.read);
router.post('/themes', themeControllers.add);
router.put('/themes/:id', themeControllers.edit);
router.delete('/themes/:id', themeControllers.remove); 

// Gestion des commentaires

router.get('/comments', commentControllers.browse);
router.get('/comments/:id', commentControllers.read);
router.post('/comments', commentControllers.add);
router.delete('/comments/:id', commentControllers.destroy); 




module.exports = router;
