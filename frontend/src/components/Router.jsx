import {BrowserRouter, Routes, Route } from "react-router-dom";
 
// Imported
import Home from "../pages/Home";
import LibraryPage from "../pages/LibraryPage";
import ProfilePage from "../pages/ProfilePage";
import WebtoonPage from "../pages/WebtoonPage";
import ChapterPage from "../pages/ChapterPage";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Browse from "../pages/Browse";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import ChaptersGestion from "./ChaptersGestion";
import CommentGestion from "./CommentsGestion";
import WebtoonsGestion from "./WebtoonsGestion";
import UsersGestion from "./UsersGestion";


const allRoutes = [
      { path: "/", component: <Home />},
      { path: "/browse", component: <Browse />},
      { path: "/webtoon", component: <WebtoonPage />},
      { path: "/webtoonname/chapter", component: <ChapterPage />},
      { path: "/profile/library", component: <LibraryPage />},
      { path: "/profile", component: <ProfilePage />},
      { path: "/about", component: <About />},
      { path: "/*", component: <ErrorPage />},
      { path: "/login", component: <LoginPage />},
      { path: "/register", component: <RegisterPage />},
      { path: "/admin", component: <AdminPage />},
      { path: "/admin/chapters_gestion", component: <ChaptersGestion />},
      { path: "/admin/comments_gestion", component: <CommentGestion />},
      { path: "/admin/webtoons_gestion", component: <WebtoonsGestion />},
      { path: "/admin/users_gestion", component: <UsersGestion />},
           ];

function Router() {
  return (
      <BrowserRouter>
      <Routes>
        {allRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
      </BrowserRouter>
  );
}

export default Router ;