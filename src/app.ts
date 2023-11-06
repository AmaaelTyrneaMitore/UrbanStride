import { join } from 'path'; // Path module for file path operations

import express from 'express'; // Express framework for handling HTTP requests
import appRootPath from 'app-root-path'; // Library for getting the root path of the application
import { connect } from 'mongoose'; // MongoDB connection library

// Custom utility functions for logging and getting IP addresses
import { log, italic, underline, error } from './utils/logger.js';
import { getPublicIpAddress, getPrivateIpAddress } from './utils/getIp.js';

// Controller for handling 404 errors
import { get404 } from './controllers/errors.js';
import adminRouter from './routes/admin.js';
import shopRouter from './routes/shop.js';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const rootDir = appRootPath.toString();

// Configure view engine and views directory
app.set('view engine', 'ejs');
app.set('views', join(rootDir, 'src', 'views'));

// Parse incoming request bodies with urlencoded payloads and
// Serve static files from the 'public' directory
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(rootDir, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

// Middleware to handle 404 errors
app.use(get404);

try {
  // Connect to the MongoDB database
  connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@urbanstride.zwaxdb4.mongodb.net/${process.env.MONGO_DEFAULT_DB}?retryWrites=true&w=majority`,
  );

  // Start the Express server
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
      // Get and log the public IP address
      const publicIpAddress = await getPublicIpAddress();
      log({ message: `Sever IP: ${italic(underline(publicIpAddress))}` });
    } catch (err) {
      // Handle any errors that occur while retrieving the public IP
      error(err);
    }
  });
} catch (err) {
  // Handle any errors that occur during server startup or database connection
  error(err);
}
