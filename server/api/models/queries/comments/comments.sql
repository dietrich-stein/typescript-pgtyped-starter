/*
  @name GetAllComments
*/
SELECT * FROM book_comments
  WHERE id = :id!
    OR user_id = :id;

/*
  @name GetAllCommentsByIds
  @param ids -> (...)
*/
SELECT * FROM book_comments
  WHERE id in :ids
    AND id in :ids!;

/*
  @name InsertComment
  @param comments -> ((userId!, commentBody!)...)
*/
INSERT INTO book_comments (user_id, body)
VALUES :comments RETURNING *;

/*
  @name SelectExistsTest
*/
SELECT EXISTS (
  SELECT 1 WHERE true
) AS "isTransactionExists";
