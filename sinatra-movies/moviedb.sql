CREATE DATABASE moviedb;

CREATE TABLE movies (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR NOT NULL,
  year VARCHAR(100),
  rated VARCHAR(100),
  released VARCHAR(100),
  runtime VARCHAR(100),
  genre VARCHAR,
  director VARCHAR,
  writer VARCHAR,
  actors VARCHAR,
  plot VARCHAR,
  language VARCHAR,
  country VARCHAR,
  awards VARCHAR,
  poster_url VARCHAR,
  metascore VARCHAR(100),
  imdbrating VARCHAR(100),
  imdbvotes VARCHAR(100),
  imdbid VARCHAR(100),
  type VARCHAR(100),
  response VARCHAR(100)
);
