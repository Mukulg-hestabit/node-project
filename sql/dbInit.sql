-- Dropping existing databse if present
DROP DATABASE IF EXISTS SchoolGroup;

-- Creating new database
CREATE DATABASE SchoolGroup;
use SchoolGroup;

-- Dropping existing tables if they are present in database
DROP TABLE IF EXISTS notifications;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS admin;

-- New table containing user as teacher and student
CREATE TABLE user(
    id int AUTO_INCREMENT PRIMARY KEY UNIQUE,
    full_name varchar(40) NOT NULL,
    email varchar(80) NOT NULL UNIQUE,
    role ENUM('teacher', 'student') NOT NULL,
    address varchar(100) NOT NULL,
    avatar varchar(100) NOT NULL,
    current_school varchar(100),
    previous_school varchar(100),
    parents_name varchar(100),
    assigned_teacher int,
    experience varchar(100),
    expertise varchar(100),
    is_approved BOOLEAN NOT NULL
);

CREATE TABLE admin(
    id int AUTO_INCREMENT PRIMARY KEY UNIQUE,
    full_name varchar(40) NOT NULL,
    email varchar(80) NOT NULL,
    password varchar(100) NOT NULL
);

CREATE TABLE notifications(
    id int AUTO_INCREMENT PRIMARY KEY UNIQUE,
    action ENUM("pending","fulfiled"),
    user_id int,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
SELECT * FROM user

SELECT * FROM notifications