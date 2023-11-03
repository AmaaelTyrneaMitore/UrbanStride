import { join } from 'path';

import express from 'express';
import appRootPath from 'app-root-path';

import { log, italic, underline, error } from './utils/logger.js';
import { getPublicIpAddress, getPrivateIpAddress } from './utils/getIp.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const rootDir = appRootPath.toString();

app.set('view engine', 'ejs');
app.set('views', join(rootDir, 'src', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(rootDir, 'public')));

app.use((_req, res) => {
  res.status(404).render('404', { pageTitle: '🤔 404 ― Page Not Found!' });
});

app.listen(PORT, async () => {
  log({
    message: `Server started at port: ${italic(underline(PORT))}`,
    clearConsole: true,
  });
  log({
    message: `Visit the server at: ${italic(
      underline(`http://${getPrivateIpAddress()}:${PORT}/`),
    )}`,
  });
  try {
    const publicIpAddress = await getPublicIpAddress();
    log({ message: `Sever IP: ${italic(underline(publicIpAddress))}` });
  } catch (err) {
    err instanceof Error
      ? error(err.message)
      : error('Unable to retrieve public IP address');
  }
});
