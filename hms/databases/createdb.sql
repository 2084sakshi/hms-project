-- Create the medconnect1 database
CREATE DATABASE IF NOT EXISTS medconnect;

-- Use the medconnect database
USE medconnect;

-- create table
CREATE TABLE IF NOT EXISTS patient (
    p_id INT PRIMARY KEY AUTO_INCREMENT,
    lname VARCHAR(50) NOT NULL,
    fname VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    age INT ,
    email VARCHAR(100),
    phone_no VARCHAR(15),
    address VARCHAR(255) NOT NULL,
    allergies VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS doctor (
    d_id INT PRIMARY KEY AUTO_INCREMENT,
    lname VARCHAR(50) NOT NULL,
    fname VARCHAR(50) NOT NULL,
    qualification VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    emailid VARCHAR(100),
    phone_no VARCHAR(15),
    d_schedule  varchar(50) not null, 
    UNIQUE (emailid), -- Ensure emailid is unique
    UNIQUE (phone_no) -- Ensure phone_no is unique
);

CREATE TABLE IF NOT EXISTS appointment (
    appt_id INT PRIMARY KEY AUTO_INCREMENT,
    d_id INT NOT NULL,
    p_id INT NOT NULL,
    appt_date DATE NOT NULL,
    appt_time TIME NOT NULL,
    status ENUM('Scheduled', 'Cancelled', 'Completed') NOT NULL,
    notes TEXT,
    FOREIGN KEY (d_id) REFERENCES doctor(d_id),
    FOREIGN KEY (p_id) REFERENCES patient(p_id)
);

CREATE TABLE IF NOT EXISTS prescription (
    pres_id INT PRIMARY KEY AUTO_INCREMENT,
    p_id INT NOT NULL,
    d_id INT NOT NULL,
    date DATE NOT NULL,
    prescription TEXT NOT NULL,
    FOREIGN KEY (p_id) REFERENCES patient(p_id),
    FOREIGN KEY (d_id) REFERENCES doctor(d_id)
);


CREATE TABLE IF NOT EXISTS medical_history (
    h_id INT PRIMARY KEY AUTO_INCREMENT,
    d_id INT NOT NULL,
    p_id INT NOT NULL,
    appt_id INT NOT NULL,
    date DATE NOT NULL,
    notes VARCHAR(100),
    FOREIGN KEY (d_id) REFERENCES doctor(d_id),
    FOREIGN KEY (p_id) REFERENCES patient(p_id),
    FOREIGN KEY (appt_id) REFERENCES appointment(appt_id)
);



-- select
select  * from patient;

-- insert
-- insert query
INSERT INTO patient (lname, fname, dob, age, email, phone_no, address, allergies)
VALUES 
    ('Smith', 'John', '1990-05-15', 31, 'john.smith@example.com', '123456789', '1234 Elm St, Some City', 'Pollen'),
    ('Johnson', 'Mary', '1985-08-21', 36, 'mary.johnson@example.com', '987654321', '5678 Oak St, Another City', 'Penicillin'),
    ('Davis', 'Michael', '1978-03-10', 43, 'michael.davis@example.com', '111223344', '7890 Pine St, Different City', 'Nuts'),
    ('Brown', 'Anna', '1995-11-03', 26, 'anna.brown@example.com', '555666777', '890 Maple Ave, Another City', 'Dust'),
    ('Taylor', 'David', '1982-07-19', 39, 'david.taylor@example.com', '444555666', '6789 Cedar St, Some City', 'Lactose'),
    ('Miller', 'Laura', '1970-12-05', 51, 'laura.miller@example.com', '999888777', '456 Birch Ave, Different City', 'Shellfish'),
    ('Harris', 'Alex', '1988-09-08', 33, 'alex.harris@example.com', '777888999', '321 Pinecone Ln, Some City', 'Pollen'),
    ('Anderson', 'Jessica', '1992-02-14', 29, 'jessica.anderson@example.com', '222333444', '101 Oakwood Dr, Another City', 'Pollen'),
    ('Clark', 'Christopher', '1980-06-27', 41, 'christopher.clark@example.com', '121314151', '222 Pine St, Different City', 'Penicillin'),
    ('Wright', 'Michelle', '1993-04-18', 28, 'michelle.wright@example.com', '989910010', '999 Maple Ave, Some City', 'Pollen'),
    ('King', 'Sarah', '1987-01-02', 34, 'sarah.king@example.com', '555444333', '123 Elm St, Another City', 'Shellfish'),
    ('Brown', 'Brian', '1975-08-12', 46, 'brian.brown@example.com', '444333222', '888 Oak St, Different City', 'Dust'),
    ('Lee', 'Rachel', '1984-03-30', 37, 'rachel.lee@example.com', '777666555', '321 Cedar Ave, Some City', 'Pollen'),
    ('Murphy', 'Kevin', '1998-06-10', 23, 'kevin.murphy@example.com', '666555444', '555 Pinecone Ln, Another City', 'Nuts'),
    ('Young', 'Eric', '1972-10-28', 49, 'eric.young@example.com', '333222111', '444 Birch Dr, Different City', 'Pollen');



INSERT INTO doctor (lname, fname, qualification, specialization, emailid, phone_no, d_schedule)
VALUES 
    ('Johnson', 'Michael', 'MD', 'Cardiology', 'michael.johnson@example.com', '123456789', 'Monday-Friday'),
    -- Add more records...
    -- Ensure a total of at least 13 records
    ('Anderson', 'Sarah', 'MD', 'Dermatology', 'sarah.anderson@example.com', '987654321', 'Monday-Wednesday-Friday');

INSERT INTO appointment (d_id, p_id, appt_date, appt_time, status, notes)
VALUES 
    (1, 1, '2023-10-15', '14:30:00', 'Scheduled', 'Follow-up checkup'),
    -- Add more records...
    -- Ensure a total of at least 13 records
    (2, 2, '2023-10-16', '10:00:00', 'Scheduled', 'Annual checkup');
INSERT INTO prescription (p_id, d_id, date, prescription)
VALUES 
    (1, 1, '2023-10-15', 'Prescribe medication for flu.'),
    -- Add more records...
    -- Ensure a total of at least 13 records
    (2, 2, '2023-10-16', 'Prescribe pain relievers for backache.');

INSERT INTO medical_history (d_id, p_id, appt_id, date, notes)
VALUES 
    (1, 1, 1, '2023-10-15', 'Patient had a follow-up checkup.'),
    -- Add more records...
    -- Ensure a total of at least 13 records
    (2, 2, 2, '2023-10-16', 'Patient presented with common cold symptoms.');

-- Add more records...
INSERT INTO doctor (lname, fname, qualification, specialization, emailid, phone_no, d_schedule)
VALUES 
    ('Sharma', 'Ravi', 'MD', 'Cardiology', 'ravi.sharma@gmail.com', '123756789', 'Monday-Friday'),
    ('Patel', 'Priyanka', 'MD', 'Neurology', 'priyanka.patel@yahoo.in', '876543210', 'Tuesday-Thursday'),
    ('Gupta', 'Amit', 'MD', 'Pediatrics', 'amit.gupta@gmail.com', '111222333', 'Monday-Tuesday'),
    ('Singh', 'Anjali', 'MD', 'Orthopedics', 'anjali.singh@yahoo.in', '444333555', 'Wednesday-Friday'),
    ('Dixit', 'Vijay', 'DO', 'Gynecology', 'vijay.dixit@gmail.com', '333555777', 'Monday-Friday'),
    ('Kapoor', 'Suman', 'MD', 'Radiology', 'suman.kapoor@yahoo.in', '666777999', 'Thursday-Saturday'),
    ('Mishra', 'Lakshmi', 'MD', 'Dentistry', 'lakshmi.mishra@gmail.com', '111444666', 'Monday-Wednesday'),
    ('Verma', 'Karan', 'DO', 'Dermatology', 'karan.verma@yahoo.in', '555666777', 'Tuesday-Thursday'),
    ('Iyer', 'Madhuri', 'MD', 'Endocrinology', 'madhuri.iyer@gmail.com', '444555666', 'Monday-Tuesday'),
    ('Bose', 'Ramesh', 'DO', 'Ophthalmology', 'ramesh.bose@yahoo.in', '999111444', 'Wednesday-Friday'),
    ('Roy', 'Jaya', 'MD', 'Rheumatology', 'jaya.roy@gmail.com', '777888999', 'Monday-Friday'),
    ('Malhotra', 'Shyam', 'MD', 'Urology', 'shyam.malhotra@yahoo.in', '333444555', 'Tuesday-Thursday'),
    ('Rao', 'Sarita', 'DO', 'Dermatology', 'sarita.rao@gmail.com', '987694321', 'Monday-Wednesday-Friday');

INSERT INTO appointment (d_id, p_id, appt_date, appt_time, status, notes)
VALUES 
    (1, 12, '2023-10-15', '14:30:00', 'Scheduled', 'Routine Cardiac Checkup'),
    (29, 9, '2023-10-16', '10:00:00', 'Scheduled', 'Neuro consultation - occasional headaches'),
    (2, 2, '2023-10-17', '09:30:00', 'Scheduled', 'Child immunization schedule'),
    (30, 10, '2023-10-18', '11:00:00', 'Scheduled', 'Back pain over the past month'),
    (35, 13, '2023-10-19', '14:15:00', 'Scheduled', 'Routine pregnancy checkup'),
    (36, 14, '2023-10-20', '15:30:00', 'Scheduled', 'MRI review'),
	(37, 1, '2023-10-21', '09:45:00', 'Scheduled', 'Dental cleaning'),
    (38, 4, '2023-10-22', '10:30:00', 'Scheduled', 'Eczema follow-up'),
    (31, 9, '2023-10-23', '16:00:00', 'Scheduled', 'Thyroid medication review'),
    (1, 8, '2023-10-24', '10:45:00', 'Scheduled', 'Annual eye checkup'),
    (1, 6, '2023-10-25', '15:15:00', 'Scheduled', 'Knee pain consultation'),
    (2, 4, '2023-10-26', '14:20:00', 'Scheduled', 'Follow-up post-surgery'),
    (38, 2, '2023-10-27', '13:00:00', 'Scheduled', 'Skin allergy consultation');

INSERT INTO prescription (p_id, d_id, date, prescription)
VALUES 
	(	1, 1, '2023-10-15', 'Prescribe heart medication.'),
	(3, 1, '2023-10-16', 'Suggest headache relief medication.'),
    (2, 33, '2023-10-17', 'Completed MMR vaccination.'),
    (5, 34, '2023-10-18', 'Suggested physiotherapy.'),
    (6, 35, '2023-10-19', 'Regular pregnancy vitamins.'),
    (8, 36, '2023-10-20', 'MRI showed no issues.'),
    (7, 1, '2023-10-21', 'Prescribed mouthwash.'),
    (10,38, '2023-10-22', 'Eczema cream prescription.'),
    (12,29, '2023-10-23', 'Adjustment in thyroid medicine.'),
    (11, 40, '2023-10-24', 'Prescribed corrective lenses.'),
    (13,41, '2023-10-25', 'Pain relief for knee.'),
    (4, 32, '2023-10-26', 'Post-surgery recovery is satisfactory.'),
	(9, 2, '2023-10-27', 'Allergy relief medication.');

INSERT INTO medical_history (d_id, p_id, appt_id, date, notes)
VALUES 
    (30,1, 1, '2023-10-15', 'Routine cardiac check-up showed no issues.'),
    (41, 3, 2, '2023-10-16', 'Occasional headaches - suggested to maintain a diary.'),
    (33, 2, 63, '2023-10-17', 'MMR vaccination completed.'),
    (1,5, 64, '2023-10-18', 'Back pain due to poor posture.'),
    (35, 6, 59, '2023-10-19', 'Routine pregnancy checkup - All well.'),
    (36, 8, 56, '2023-10-20', 'MRI reviewed - All clear.'),
    (41, 7, 57, '2023-10-21', 'Suggested bi-annual dental checkup');
    
    select * from doctor;
	select * from patient;
    select * from appiontment;
    select * from prescription;
    select * from medical_history;
        
	