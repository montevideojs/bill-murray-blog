import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import pug from 'pug';
import webpackAssets from 'express-webpack-assets';

const port = process.env.PORT || 3000;
const app = express();

const templatePath = require.resolve('./index.pug');
const templateFn = require('pug').compileFile(templatePath);

if (process.env.NODE_ENV === 'production'){
	app.use(compression());
	app.use(express.static('dist',{ maxAge: '1y' }));
} else {
	const compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/test', function(req, res) {
  res.send('Success');
});

app.use(webpackAssets(path.join(__dirname, '../', 'webpack-assets.json'), {
  devMode: process.env.NODE_ENV !== 'production'
}));

app.get('*', function(req, res) {

  res.write(templateFn({
    config: {
      NODE_ENV: process.env.NODE_ENV
    },
    jsBundle: res.locals.webpack_asset('main').js,
    cssBundle: res.locals.webpack_asset('main').css
  }));
  res.end();
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('\nListening in port ',port);
    if (process.env.NODE_ENV === 'development'){
      open(`http://localhost:${port}`);
    }
  }
});
