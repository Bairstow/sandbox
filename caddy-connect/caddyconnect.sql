CREATE DATABASE caddyconnect;

CREATE TABLE caddies (
  id SERIAL4 PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  age INTEGER,
  gender VARCHAR(4),
  email VARCHAR(100) NOT NULL,
  password_digest VARCHAR(400) NOT NULL,
  phone VARCHAR(50),
  suburb VARCHAR(100),
  home_course_id INTEGER,
  rate INTEGER,
  handicap INTEGER,
  history TEXT
);

CREATE TABLE players (
  id SERIAL4 PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  age INTEGER,
  gender VARCHAR(4),
  email VARCHAR(100) NOT NULL,
  password_digest VARCHAR(400) NOT NULL,
  phone VARCHAR(50),
  suburb VARCHAR(100),
  home_course_id INTEGER,
  handicap INTEGER,
  history TEXT
);

CREATE TABLE courses (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE availabilities (
  id SERIAL4 PRIMARY KEY,
  caddy_id INTEGER NOT NULL,
  monday_am BOOLEAN NOT NULL,
  monday_pm BOOLEAN NOT NULL,
  tuesday_am BOOLEAN NOT NULL,
  tuesday_pm BOOLEAN NOT NULL,
  wednesday_am BOOLEAN NOT NULL,
  wednesday_pm BOOLEAN NOT NULL,
  thursday_am BOOLEAN NOT NULL,
  thursday_pm BOOLEAN NOT NULL,
  friday_am BOOLEAN NOT NULL,
  friday_pm BOOLEAN NOT NULL,
  saturday_am BOOLEAN NOT NULL,
  saturday_pm BOOLEAN NOT NULL,
  sunday_am BOOLEAN NOT NULL,
  sunday_pm BOOLEAN NOT NULL
);

CREATE TABLE caddy_locations (
  id SERIAL4 PRIMARY KEY,
  caddy_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL
);

CREATE TABLE listings (
  id SERIAL4 PRIMARY KEY,
  player_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  tee_time TIMESTAMP NOT NULL
);
