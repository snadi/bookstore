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

This log will take some time to appear because the database is bootstraping and
the script is populating the database with some mock data. In other words, only
start accessing/testing the app once you see the output as shown above.

Then, to access the bookstore on the browser, type `localhost:3000`.

# Endpoints

There are two HTTP GET method endpoints available:

- `GET /`. Gets all books. To retrieve books only in certain category, you can
  use optional query parameter `category`. For example, to get all books in
  category "Java", the request will look like `GET /?category=Java`.

- `GET /search?q={title}`. Searches books by `title`. For example, to get all books
  that contain "Java" in their title, the request will look like `GET
  /search?q=Java`.

# Resource usage stats

To see how many resources the application "eats", type `docker stats`
after running locally. Make sure the app is running in parallel,
otherwise there would be no output.

# Credits

Created and being maintained by [Batyr Nuryyev](https://github.com/oneturkmen), for
CMPUT 402 "Software Quality" class (Winter 2021).

Books data obtain from [`dudeonthehorse`'s repository](https://github.com/dudeonthehorse/datasets).
