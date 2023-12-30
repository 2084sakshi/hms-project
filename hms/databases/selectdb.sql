	USE medconnect;


    select * from doctor;
	select * from patient;
    select * from appointment;
    select * from prescription;
    select * from medical_history;
   

-- add constraints
   
ALTER TABLE medical_history
ADD FOREIGN KEY (p_id) REFERENCES patient(p_id) ON DELETE CASCADE;
ALTER TABLE medical_history
ADD FOREIGN KEY (d_id) REFERENCES doctor(d_id) ON DELETE CASCADE;
ALTER TABLE medical_history
ADD FOREIGN KEY (appt_id) REFERENCES appointment(appt_id) ON DELETE CASCADE;

ALTER TABLE prescription
ADD FOREIGN KEY (p_id) REFERENCES patient(p_id) ON DELETE CASCADE;
ALTER TABLE prescription
ADD FOREIGN KEY (d_id) REFERENCES doctor(d_id) ON DELETE CASCADE;

DELETE FROM patient WHERE p_id = 16;


        