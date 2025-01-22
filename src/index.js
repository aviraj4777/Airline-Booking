const express = require('express');
const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();
// Router :- It is a class in express that helps us to create route handlers. Can also create modules for your routes.
//app.use() -> creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server", {});
});

