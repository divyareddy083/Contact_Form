CREATE DATABASE IF NOT EXISTS contact_us_db;
USE contact_us_db;

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    contactNumber VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL,
    interestedIn VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from contacts;