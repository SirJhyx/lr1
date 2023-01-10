-- create blog_db
CREATE DATABASE blog_db;

-- select blog_db
USE blog_db;

-- create users table.
CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR (100) NOT NULL,
	password VARCHAR (300) NOT NULL,
	datetime_created DATETIME NOT NULL,
	PRIMARY KEY (id)
);

-- create posts table.
CREATE TABLE posts (
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR (500) NOT NULL,
	content VARCHAR (5000) NOT NULL,
	datetime_posted DATETIME NOT NULL,

	user_id INT NOT NULL,

	PRIMARY KEY (id),

	CONSTRAINT fk_posts_user_id
		FOREIGN KEY (user_id) REFERENCES users (id)
		ON UPDATE CASCADE
		ON DELETE RESTRICT
);

-- create post_comments table.
CREATE TABLE post_comments (
	id INT NOT NULL AUTO_INCREMENT,
	content VARCHAR (5000) NOT NULL,
	datetime_commented DATETIME NOT NULL,

	post_id INT NOT NULL,
	user_id INT NOT NULL,

	PRIMARY KEY (id),

	CONSTRAINT fk_post_comments_post_id
		FOREIGN KEY (post_id) REFERENCES posts (id)
		ON UPDATE CASCADE
		ON DELETE RESTRICT,

	CONSTRAINT fk_post_comments_user_id
		FOREIGN KEY (user_id) REFERENCES users (id)
		ON UPDATE CASCADE
		ON DELETE RESTRICT
);

-- create post_likes table.
CREATE TABLE post_likes (
	id INT NOT NULL AUTO_INCREMENT,
	datetime_liked DATETIME NOT NULL,

	post_id INT NOT NULL,
	user_id INT NOT NULL,

	PRIMARY KEY (id),

	CONSTRAINT fk_post_likes_post_id
		FOREIGN KEY (post_id) REFERENCES posts (id)
		ON UPDATE CASCADE
		ON DELETE RESTRICT,

	CONSTRAINT fk_post_likes_user_id
		FOREIGN KEY (user_id) REFERENCES users (id)
		ON UPDATE CASCADE
		ON DELETE RESTRICT
);

-- Insert values in users table.
INSERT INTO users (email, password, datetime_created)
VALUES ("johnsmith@gmail.com", "passwordA", "2021-01-01 01:00:00");

INSERT INTO users (email, password, datetime_created)
VALUES ("juandelacruz@gmail.com", "passwordB", "2021-01-01 02:00:00");

INSERT INTO users (email, password, datetime_created)
VALUES ("janesmith@gmail.com", "passwordC", "2021-01-01 03:00:00");

INSERT INTO users (email, password, datetime_created)
VALUES ("mariadelacruz@gmail.com", "passwordD", "2021-01-01 04:00:00");

INSERT INTO users (email, password, datetime_created)
VALUES ("johndoe@gmail.com", "passwordE", "2021-01-01 05:00:00");

-- Insert values in posts table

INSERT INTO posts (user_id, title, content, datetime_posted) VALUES (1, "First Code", "Hello World!", "2021-01-02 01:00:00");

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES (1, "Second Code", "Hello Earth!", "2021-01-02 2:00:00");

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES (2, "Third Code", "Welcome to Mars!", "2021-01-02 3:00:00");

INSERT INTO posts (user_id, title, content, datetime_posted)
VALUES (4, "Fourth Code", "Bye bye solar system!", "2021-01-02 4:00:00");

-- Get All the title with a user_id of 1.
SELECT title from posts WHERE user_id = 1;

-- Get all user's email and datetime of creation.
SELECT email, datetime_created from users;

-- UPDATE a post's content to "Hello to the people of the Earth!" where it's initial content is "Hello Earth!" by using the record's ID.
UPDATE posts SET content = "Hello to the people of the Earth!" WHERE id = 2;

-- Delete the user with an email of "johndoe@gmail.com".
DELETE FROM users WHERE email = "johndoe@gmail.com";