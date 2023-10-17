/** Types generated for queries found in "src/comments/comments.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllComments' parameters type */
export interface IGetAllCommentsParams {
  id: number;
}

/** 'GetAllComments' return type */
export interface IGetAllCommentsResult {
  body: string | null;
  book_id: number | null;
  created_at: Date;
  id: number;
  updated_at: Date;
  user_id: number | null;
}

/** 'GetAllComments' query type */
export interface IGetAllCommentsQuery {
  params: IGetAllCommentsParams;
  result: IGetAllCommentsResult;
}

const getAllCommentsIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":41,"b":44},{"a":63,"b":65}]}],"statement":"SELECT * FROM book_comments\n  WHERE id = :id!\n    OR user_id = :id"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM book_comments
 *   WHERE id = :id!
 *     OR user_id = :id
 * ```
 */
export const getAllComments = new PreparedQuery<IGetAllCommentsParams,IGetAllCommentsResult>(getAllCommentsIR);


/** 'GetAllCommentsByIds' parameters type */
export interface IGetAllCommentsByIdsParams {
  ids: readonly (number)[];
}

/** 'GetAllCommentsByIds' return type */
export interface IGetAllCommentsByIdsResult {
  body: string | null;
  book_id: number | null;
  created_at: Date;
  id: number;
  updated_at: Date;
  user_id: number | null;
}

/** 'GetAllCommentsByIds' query type */
export interface IGetAllCommentsByIdsQuery {
  params: IGetAllCommentsByIdsParams;
  result: IGetAllCommentsByIdsResult;
}

const getAllCommentsByIdsIR: any = {"usedParamSet":{"ids":true},"params":[{"name":"ids","required":true,"transform":{"type":"array_spread"},"locs":[{"a":42,"b":45},{"a":61,"b":65}]}],"statement":"SELECT * FROM book_comments\n  WHERE id in :ids\n    AND id in :ids!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM book_comments
 *   WHERE id in :ids
 *     AND id in :ids!
 * ```
 */
export const getAllCommentsByIds = new PreparedQuery<IGetAllCommentsByIdsParams,IGetAllCommentsByIdsResult>(getAllCommentsByIdsIR);


/** 'InsertComment' parameters type */
export interface IInsertCommentParams {
  comments: readonly ({
    userId: number,
    commentBody: string
  })[];
}

/** 'InsertComment' return type */
export interface IInsertCommentResult {
  body: string | null;
  book_id: number | null;
  created_at: Date;
  id: number;
  updated_at: Date;
  user_id: number | null;
}

/** 'InsertComment' query type */
export interface IInsertCommentQuery {
  params: IInsertCommentParams;
  result: IInsertCommentResult;
}

const insertCommentIR: any = {"usedParamSet":{"comments":true},"params":[{"name":"comments","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"userId","required":true},{"name":"commentBody","required":true}]},"locs":[{"a":49,"b":57}]}],"statement":"INSERT INTO book_comments (user_id, body)\nVALUES :comments RETURNING *"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO book_comments (user_id, body)
 * VALUES :comments RETURNING *
 * ```
 */
export const insertComment = new PreparedQuery<IInsertCommentParams,IInsertCommentResult>(insertCommentIR);


/** 'SelectExistsTest' parameters type */
export type ISelectExistsTestParams = void;

/** 'SelectExistsTest' return type */
export interface ISelectExistsTestResult {
  isTransactionExists: boolean | null;
}

/** 'SelectExistsTest' query type */
export interface ISelectExistsTestQuery {
  params: ISelectExistsTestParams;
  result: ISelectExistsTestResult;
}

const selectExistsTestIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT EXISTS (\n  SELECT 1 WHERE true\n) AS \"isTransactionExists\""};

/**
 * Query generated from SQL:
 * ```
 * SELECT EXISTS (
 *   SELECT 1 WHERE true
 * ) AS "isTransactionExists"
 * ```
 */
export const selectExistsTest = new PreparedQuery<ISelectExistsTestParams,ISelectExistsTestResult>(selectExistsTestIR);


