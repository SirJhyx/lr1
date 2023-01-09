-- create enrollment_db
CREATE DATABASE enrollment_db;

-- select enrollment_db
USE enrollment_db;

-- create students table
CREATE TABLE students ( 
	id INT NOT NULL AUTO_INCREMENT, 
	student_name VARCHAR (50) NOT NULL, 
	PRIMARY KEY (id) 
);

-- create teachers table
CREATE TABLE teachers (
    id INT NOT NULL AUTO_INCREMENT,
    teacher_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
);

-- create courses table with teacher_id as a Foreign Key
CREATE TABLE courses (
    id INT NOT NULL AUTO_INCREMENT,
    course_name VARCHAR (50) NOT NULL,
    teacher_id INT NOT NULL,
    PRIMARY KEY (id),
    
    CONSTRAINT fk_courses_teacher_id
    	FOREIGN KEY (teacher_id) REFERENCES teachers (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT
);

-- create student_courses table with course_id and student_id as foreign keys
CREATE TABLE student_courses (
    id INT NOT NULL AUTO_INCREMENT,
    course_id INT NOT NULL,
    student_id INT NOT NULL,
    PRIMARY KEY (id),
    
    CONSTRAINT fk_student_courses_course_id
    	FOREIGN KEY (course_id) REFERENCES courses (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT,
    
    CONSTRAINT fk_student_courses_student_id
    	FOREIGN KEY (student_id) REFERENCES students (id)
    	ON UPDATE CASCADE
    	ON DELETE RESTRICT
);