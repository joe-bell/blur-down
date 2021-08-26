import * as React from "react";

export const Layout: React.FC = (props) => (
  <React.Fragment>
    <header className="container">
      <div className="header">
        <span className="header__icon" role="img" aria-label="warning">
          ⚠️
        </span>
        <p>
          Please avoid copying any code until{" "}
          <a href="https://joebell.co.uk/blog/loading-images-with-the-blur-down-technique">
            reading the article in full
          </a>
          .
        </p>
      </div>
    </header>
    <main className="container">
      <ul className="layout">{props.children}</ul>
    </main>
  </React.Fragment>
);

export const LayoutItem: React.FC = (props) => (
  <li className="layout__item">{props.children}</li>
);

export const LayoutTitle: React.FC = (props) => (
  <p className="layout__title">{props.children}</p>
);
