-- Dropping existing tables if they are present in database
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS admin;
DROP TABLE IF EXISTS notifications;

-- New table containing user as teacher and student
CREATE TABLE user(
    id int AUTO_INCREMENT PRIMARY KEY UNIQUE,
    full_name varchar(40) NOT NULL,
    email varchar(80) NOT NULL,
    role ENUM('teacher', 'student') NOT NULL,
    address varchar(100) NOT NULL,
    avatar varchar(100) NOT NULL,
    current_school varchar(100),
    previous_school varchar(100),
    parents_name varchar(100),
    assigned_teacher varchar(100),
    experience varchar(100),
    expertise varchar(100),
    is_approved BOOLEAN NOT NULL,
    FOREIGN KEY (assigned_teacher) REFERENCES user(id)
);

CREATE TABLE admin(
    id int AUTO_INCREMENT PRIMARY KEY UNIQUE,
    full_name varchar(40) NOT NULL,
    email varchar(80) NOT NULL,
    password varchar(100) NOT NULL
);

CREATE TABLE notifications(
    id int AUTO_INCREMENT PRIMARY KEY UNIQUE,
    notification_for varchar(40),
    teacher_id int,
    FOREIGN KEY (teacher_id) REFERENCES user(id)
)