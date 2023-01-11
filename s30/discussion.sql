-- Add new records

-- Add 5 artists, 2 albums each, 2 songs per album
INSERT INTO artists(name) VALUES ("Taylor Swift");
INSERT INTO artists(name) VALUES ("Lady Gaga");
INSERT INTO artists(name) VALUES ("Justin Bieber");
INSERT INTO artists(name) VALUES ("Ariana Grande");
INSERT INTO artists(name) VALUES ("Bruno Mars");

-- Taylor Swift
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Fearless", "2008", "3");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Fearless", "246", "Pop", "3");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Love Story", "246", "Country Pop", "3");

-- Lady Gaga
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("A Star is Born", "2018-06-24", "4");
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Born This Way", "2011-03-18", "4");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Shallow", "201", "Country Rock, Folk Rock", "4");
INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Born This Way", "252", "Electropop", "5");

-- Justin Bieber
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Purpose ", "2015-04-10", "5");
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Believe", "2012-12-20", "5");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Sorry", "232", "Dancehall-Poptropical", "7");
INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Boyfriend", "251 ", "Pop album", "6");

-- Ariana Grande
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Dangerous Woman ", "2016-08-14", "6");
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Thank U Next", "2019-11-20", "6");

INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Into You", "242 ", "EDM Hous", "8");
INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Thank U, Next", "236", "Pop, R&B", "9");

-- Bruno Mars
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("24k Magic", "2016-04-24", "7");


INSERT INTO songs(song_name, length, genre, album_id) VALUES ("24k Magic", "236", "Funk, Disco, R&B", "10");

-- Advanced Selects

-- Exclude Records - removes the records based on the given value/s.
-- SYNTAX: SELECT * FROM table_name WHERE column_name != value 
SELECT * FROM songs WHERE id != 11;

-- Comparison Operators: greater or less than
-- SYNTAX: SELECT * FROM table_name WHERE column_name < value 
-- SYNTAX: SELECT * FROM table_name WHERE column_name >= value 

SELECT * FROM `songs` WHERE id < 11;
SELECT * FROM `songs` WHERE id <= 11;

SELECT * FROM `songs` WHERE id >= 11;
SELECT * FROM `songs` WHERE id > 11;

-- Get specific IDs (OR)
-- Syntax: SELECT column_name FROM table_name WHERE condition1 OR condition2
SELECT * FROM `songs` WHERE id = 1 OR id = 3 OR id = 5;
-- last condition was shown because id 5 is only included in the records

-- Get specific IDs (AND)
-- Syntax: SELECT column_name FROM table_name WHERE condition1 AND condition2
SELECT * FROM `songs` WHERE id = 1 AND id = 3 AND id = 5;
-- we need the specific record to show the contents.

-- Get specific IDs (IN)
SELECT * FROM `songs` WHERE id IN (1,3,5);
--it helps the dev select the table even without knowing the column name.

-- Return records in songs table with genre of Pop and KPop
SELECT * FROM songs WHERE genre IN ("Pop", "KPop");

-- Find partial matches
SELECT * FROM `songs` WHERE song_name LIKE "%u"; --selects keyword at the end.
SELECT * FROM `songs` WHERE song_name LIKE "t%"; --selects keyword at the start
SELECT * FROM `songs` WHERE song_name LIKE "thank%";
SELECT * FROM `songs` WHERE song_name LIKE "%a%"; -- selects keyword in between
SELECT * FROM `albums` WHERE date_released LIKE "%19%"; --selects value either in the beginning or in the end.

-- Sorting records
-- SYNTAX: SELECT column_name FROM table_name ORDER BY column1, column2 ASC|DESC
SELECT * FROM `songs` ORDER BY song_name ASC; -- it sorts number first then first letters in the alphabet
SELECT * FROM `songs` ORDER BY song_name DESC; -- z to a then number

-- Getting distinct records
SELECT DISTINCT genre FROM songs;

-- Table Joins

-- Combine artists and albums table
SELECT * FROM artists 
         JOIN albums ON 
         artists.id = albums.artist_id;

-- Combine 2 or more tables
SELECT * FROM `artists` 
         JOIN albums ON 
         artist_id = albums.artist_id 
         
         JOIN songs ON 
         albums.id = songs.album_id;

-- Select columns to be included per table.
SELECT artists.name, albums.album_title 

FROM artists --table name

JOIN albums -- table name

ON artists.id = albums.artist_id;

-- Show artists without records on the right side of the joined table.
SELECT * FROM `artists` 
         LEFT JOIN albums 
         ON artists.id = albums.artist_id;



