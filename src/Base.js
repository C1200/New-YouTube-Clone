import { useState } from "react";
import { REPO } from "./config";
import "./css/base.css";

function Base({ children }) {
  const [appsIsOpen, setAppsOpen] = useState(false);
  const [settingsIsOpen, setSettingsOpen] = useState(false);
  const [drawerIsOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="start">
            <a
              onClick={() => setDrawerOpen((open) => !open)}
              className="material-icons"
            >
              menu
            </a>
            <a
              title="YouTube Home"
              href="/"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span title="YouTube Home" className="logo"></span>
              <span className="content-region">GB</span>
            </a>
          </div>

          <div className="center">
            <form className="search" action="/search" method="get">
              <div className="searchinput">
                <input type="text" name="q" placeholder="Search" />
              </div>
              <button type="submit" className="material-icons">
                search
              </button>
            </form>
          </div>

          <div className="end">
            <a
              onClick={() => {
                setAppsOpen((open) => !open);
                setSettingsOpen(false);
              }}
              className="material-icons"
            >
              apps
            </a>
            <a
              onClick={() => {
                setSettingsOpen((open) => !open);
                setAppsOpen(false);
              }}
              className="material-icons"
            >
              more_vert
            </a>
          </div>

          <div
            className={"context-menu" + (appsIsOpen ? " show" : "")}
            id="apps-menu"
          >
            <div className="items">
              <a href="https://c1200.js.org/">
                <span className="material-icons">language</span>
                My Website
              </a>
            </div>
            <span className="separator"></span>
            <div className="items">
              <a href="https://c1200.js.org/projects">
                <span className="material-icons">work</span>
                My Projects
              </a>
              <a href="https://c1200.js.org/contact">
                <span className="material-icons">mail</span>
                Contact Me
              </a>
            </div>
            <span className="separator"></span>
            <div className="items">
              <a href="https://c1200.js.org/projects/photoalbum">
                <span className="material-icons">photo_library</span>
                PhotoAlbum
              </a>
              <a href="https://c1200.js.org/projects/repbot">
                <span className="material-icons">smart_toy</span>
                RepBot
              </a>
            </div>
          </div>

          <div
            className={"context-menu" + (settingsIsOpen ? " show" : "")}
            id="apps-menu"
          >
            <div className="items">
              <a href={`https://github.com/${REPO}/issues`}>
                <span className="material-icons">feedback</span>
                Send Feedback
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="drawer"></nav>

      <main>{children}</main>
    </>
  );
}

export default Base;
