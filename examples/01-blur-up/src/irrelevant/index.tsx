import * as React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
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
      <ul className="layout">{children}</ul>
    </main>
  </React.Fragment>
);

export const LayoutItem = ({ children }: { children: React.ReactNode }) => (
  <li className="layout__item">{children}</li>
);

export const LayoutTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="layout__title">{children}</p>
);
