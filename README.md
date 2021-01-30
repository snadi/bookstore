# The BookStore

Plenty of tech books.

# How to run locally

To start the project locally, run:

```
docker-compose --compatibility up --build
```

which makes sure resources (CPU/mem) for services are limited (see
[docker-compose.yml](./docker-compose.yml)).

Then, to access the bookstore on the browser, type `localhost:3000`.

