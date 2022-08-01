import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MainContainer from "./MainContainer";
import { useStyles } from "./pageStyle";
import CreateArticle from "./CreateArticle";
import EditArticle from "./EditArticle";

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Routes>
          <Route index element={<MainContainer />} />
          <Route path="articles">
            <Route path="new" element={<CreateArticle />} />
            <Route index element={<MainContainer />} />
          </Route>
          <Route path="article">
            <Route path=":articleId" element={<EditArticle />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
