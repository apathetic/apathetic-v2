const path = require('path');
const fs = require('fs');

const React = require('react');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');

const { default: Store } = require('../src/store');
const { default: App } = require('../src/App');


module.exports = function render(url) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, indexFile) => {
      if (err) {
        reject('read err', err);
      }

      const store = Store();
      const markup = renderToString(
        <Provider store={store}>
          <App/>
        </Provider>
      );
      const response = indexFile.replace('{{SSR}}', markup);

      resolve(response);
    });
  });
}
