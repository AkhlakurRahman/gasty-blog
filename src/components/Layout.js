import React from 'react';
import { Global, css } from '@emotion/core';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 18px;
          line-height: 1.4;

          /* Remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 750px;
      `}
    >
      {children}
    </main>
  </>
);

export default Layout;
