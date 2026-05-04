const React = require('react'); // eslint-disable-line no-unused-vars

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-tag-manager"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-HT5HX2C39H"
    />,
    <script
      key="google-analytics"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HT5HX2C39H');
        `,
      }}
    />,
  ]);
};
