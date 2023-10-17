

-- INSERT ROWS

INSERT INTO users (email, user_name, first_name, last_name, age)
VALUES ('alex.doe@example.com', 'alexd', 'Alex', 'Doe', 35),
       ('jane.holmes@example.com', 'jane67', 'Jane', 'Holmes', 23),
       ('andrewjackson@example.com', 'ajack9', 'Andrew', 'Jackson', 19);

INSERT INTO notifications (user_id, payload)
VALUES (1, '{
  "message": "You have new frogs",
  "num_frogs": 2,
  "history": [
    {
      "event": "NewFrog",
      "timestamp": "2020-05-05T17:12:25+01:00"
    },
    {
      "event": "NewFrog",
      "timestamp": "2020-05-05T17:13:04+01:00"
    }
  ]
}');

INSERT INTO authors (first_name, last_name)
VALUES ('Nassim', 'Taleb'),
       ('Carl', 'Sagan'),
       ('Bertolt', 'Brecht');

INSERT INTO books (rank, name, author_id)
VALUES (1, 'Black Swan', 1),
       (4, 'The Dragons Of Eden', 2),
       (2, 'Mysteries of a Barbershop', 3),
       (3, 'In the Jungle of Cities', 3);

INSERT INTO book_comments (user_id, book_id, body)
VALUES (1, 1, 'Fantastic read, recommend it!'),
       (1, 2, 'Did not like it, expected much more...');
