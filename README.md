# The BookStore

Plenty of tech books.

# Requirements

- `docker`
- `docker compose` that supports version '2.4'

# How to run locally

To start the project locally, run:

```
docker-compose up --build
```

And you should see something like:

```
api_1      | 
api_1      | > bookstore@1.0.0 start
api_1      | > node app.js
api_1      | 
api_1      | (node:19) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
api_1      | (Use `node --trace-deprecation ...` to show where the warning was created)
```

Then, to access the bookstore on the browser, type `localhost:3000`.

# Resource usage stats

To see how many resources the application "eats", type `docker stats`
after running locally. Make sure the app is running in parallel,
otherwise there would be no output.

