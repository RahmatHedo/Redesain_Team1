import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Game from "../pages/Game";
import GameDetail from "../pages/GameDetail";
import InformationRating from "../pages/InformationRating";
import BlogDetail from "../pages/BlogDetail";
import About from "../pages/About";


function AppRoutes() {
  return (
    <Routes>
        <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Game />} />
            <Route path="/gamesdet" element={<GameDetail />} />
            <Route path="/information-rating" element={<InformationRating />} />
            <Route path="/blog-detail:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />

        </Route>
    </Routes>
  );
}

export default AppRoutes;