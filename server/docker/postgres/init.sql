-- Schema, Extensions, Etc.

-- CREATE DATABASE tps;
CREATE SCHEMA tps_api;
ALTER DATABASE tps SET search_path TO tps_api;
SET search_path TO tps_api;

-- Anonymous Role -- i.e. web usage

CREATE ROLE tps_anonymous NOLOGIN;
GRANT USAGE ON SCHEMA tps_api TO tps_anonymous;

-- Dedicated role -- Connecting to the database instead of using the highly privileged "postgres" role.

CREATE ROLE tps_authenticator NOINHERIT LOGIN PASSWORD 'GENERATE_A_SECURE_PASSWORD';
GRANT tps_anonymous TO tps_authenticator;

-- Tables --

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  user_name TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  age INT,
  registration_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Permissions ---

GRANT SELECT ON tps_api.users TO tps_anonymous;

-- Rows --

INSERT INTO users (email, user_name, first_name, last_name, age)
VALUES ('alex.doe@example.com', 'alexd', 'Alex', 'Doe', 35),
       ('jane.holmes@example.com', 'jane67', 'Jane', 'Holmes', 23),
       ('andrewjackson@example.com', 'ajack9', 'Andrew', 'Jackson', 19);