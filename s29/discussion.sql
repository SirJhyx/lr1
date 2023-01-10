-- INSERT COMMAND
-- INSERT INTO table_name(column_name) VALUES (column_value)

--INSERTING RECORDS
-- MYSQL Year format: yyyy-mm-dd

--Insert values in artists table
INSERT INTO artists(name) VALUES ("Rivermaya");
INSERT INTO artists(name) VALUES ("Psy");

--Insert values in albums table
INSERT INTO albums (album_title, date_released, artist_id) VALUES ("Psy 6", "2012-1-1", 2);
INSERT INTO albums(album_title, date_released, artist_id) VALUES ("Trip", "1996-01-01", "1");

--Insert values in songs table
INSERT INTO songs (song_name, length, genre, album_id) VALUES ("Gangnam Style", 253, "K-Pop", 1);
INSERT INTO songs(song_name, length, genre, album_id) VALUES ("Kundiman", "234", "OPM", "2");
INSERT INTO songs (song_name, length, genre, album_id) VALUES ("Kisapmata", 239, "OPM",2);

--Selecting Records
-- SYNTAX: SELECT * FROM table_name
-- SELECT column_name FROM table_name 

-- Display the title and genre of all the songs
SELECT song_name, genre FROM songs;

-- Display all columns in the songs table
SELECT * FROM songs;
-- * all

-- Display the title of all OPM songs
-- Sir Reden's version
SELECT song_name FROM songs WHERE genre LIKE 'OPM';
-- Sir Dom's version
SELECT song_name FROM songs WHERE genre = 'OPM';

-- We can use AND and OR clause for multiple expressions in the WHERE clause

-- Display the title and length of the OPM songs that are more than 2 minutes
SELECT song_name, length FROM songs WHERE length > 200 AND genre = "OPM";

--Updating Records
--Syntax: UPDATE table_name SET column1 = value1 WHERE condition
UPDATE songs SET length = 240 WHERE song_name = "Kundiman";
UPDATE songs SET length = 200 WHERE song_name = "Gangnam Style";


--Deleting records
--Syntax: DELETE FROM table_name WHERE condition

-- Delete all OPM songs that are equal or more than 2 minutes
DELETE FROM songs WHERE genre = "OPM" AND length >= 200;

-- Delete all rows in songs table 
DELETE FROM songs