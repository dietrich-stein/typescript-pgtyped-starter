import 'dotenv/config';
import express from "express";
import pg from 'pg';
import {
  getBooks,
} from './__generated__/books.queries';
import { Server, Path, GET, PathParam } from "typescript-rest";

// https://github.com/d0whc3r/typescript-rest#boilerplate-project

const { Client } = pg;
const dbConfig = {
  host: process.env.POSTGRESQL_HOST,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE,
  port: Number(process.env.POSTGRESQL_PORT)
};

@Path("/books")
class BooksService {
  //@Path(":name")
  @GET
  async returnBooks(): Promise<string> {
    // Parse dates as strings for demo and testing purposes
    pg.types.setTypeParser(pg.types.builtins.DATE, function (val) {
      return val;
    });

    pg.types.setTypeParser(pg.types.builtins.INT8, function (val) {
      return BigInt(val);
    });

    const client = new Client(dbConfig);
    await client.connect();
    const books = await getBooks.run(undefined, client);
    await client.end();

    return JSON.stringify(books);
  }
}

  /*sayHello( @PathParam('name') name: string): string {
    return "Hello " + name;
  }*/

let app: express.Application = express();
Server.buildServices(app);

app.listen(3000, function() {
  console.log('Rest Server listening on port 3000!');
});
