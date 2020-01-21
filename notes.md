[ client ] < HTTP > [ API (Knex + db driver) ] < DB Network Protocol > [ Data Store ]

Knex: translates from JS to SQL and from rows of DB data to JS arrays.

DB Driver: knows how to use the database protocol over the network. Depends of the type of database used.

MongoDB -> mongo protocol
PostgreSQL -> postgresql://

## mantras

-   every table MUST have a Primary Key
-   every change to the database schema requires a new migration.

## Expectations

-   NOT about managing databases
-   about using databases from an API
-   about taking requirements and designing a data model (the db schema).

## Database Migrations

-   a tool for to evolve your database over time.
-   can create database objects
-   can modify database objects
-   live together with your application code. Pushed to source control (Git)
-   written in JS.

### An example

chef portfolio, spotify song suggester, firshFriends, idTheftProtection

Song Suggester

-   user profile
-   favorites songs
-   playlists
-   share their favorites or playlists
-   follow users
-   look for an artist, song or genre
-   according to mood
-   similar on tempo and beats
-   suggests songs/artists based on (current song, artist, mood, others?)

Songs

-   list of songs
-   add a song
-   import song metadata
-   update a song
-   remove a song
-   add album art

Songs Table Schema

-   id: Primary Key, integer, auto-increment automatically.
-   name: string, not unique, max size of 255, indexed. An index is a way to make searches on this column faster.
-   duration: integer (stored in seconds)
-   artist: string, indexed
-   favorite: boolean, default value: false