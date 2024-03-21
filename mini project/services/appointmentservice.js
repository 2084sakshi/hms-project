const Appointment = require('../models/appointment');
const moment = require('moment');

const getAllAppointments = async () => {
  try {
    const appointments = await Appointment.find()
      .populate({
        path: 'doctor',
        select: 'name', // Include only name, exclude _id
      })
      .populate({
        path: 'patient',
        select: 'name', // Include only name, exclude _id
      })
      .select('time status bookingDate doctor patient')
      .lean(); // Convert Mongoose document to plain JavaScript object

    // Format bookingDate and remove doctor and patient _id
    const formattedAppointments = appointments.map((appointment) => ({
      _id: appointment._id,
      patient: {
        name: appointment.patient.name,
      },
      doctor: {
        name: appointment.doctor.name,
      },
      time: appointment.time,
      status: appointment.status,
      bookingDate: moment(appointment.bookingDate).format('DD-MM-YYYY'),
    }));

    return formattedAppointments;
  } catch (error) {
    console.error('Error getting all appointments:', error.message);
    throw error;
  }
};
/*const getAllAppointments = async () => {
  try {
    const appointments = await Appointment.find()
      .populate('patient', 'name') // Populate patient with only the 'name' field
      .populate('doctor', 'name'); // Populate doctor with only the 'name' field

    // Format appointments as needed
    const formattedAppointments = appointments.map(appointment => ({
      _id: appointment._id,
      patient: appointment.patient,
      doctor: appointment.doctor,
      time: appointment.time,
      status: appointment.status,
      bookingDate: formatDate(appointment.bookingDate), // Format the date as needed
    }));

    return formattedAppointments;
  } catch (error) {
    console.error('Error getting all appointments:', error.message);
    throw error;
  }
};

// Helper function to format the date as DD-MM-YYYY
function formatDate(date) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-IN', options);
}*/

const approveAppointment = async (appointmentId) => {
  // Implement logic to update the approval status of an appointment in the database
  try {
    const updatedappointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { $set: { status: 'approved' } },
      { new: true }
    );
    if (!updatedappointment) {
      throw new Error('Appointment not found or already approved/rejected');
    }
    return updatedappointment;
  } catch (error) {
    console.error('Error approving appointment:', error.message);
    throw error;
  }
};

const getAppointmentsByDoctorId = (doctorId) => {
  // Implement logic to fetch appointments for a specific doctor from the database
  return Appointment.find({ doctor: doctorId });
};

const getAppointmentsByPatientId = (patientId) => {
  // Implement logic to fetch appointments for a specific patient from the database
  return Appointment.find({ patient: patientId });
};

const bookAppointment = async (patient, doctor, date,time) => {
  try {
    // Check if the appointment slot is available (add your own logic here)

    // Assuming your Appointment model has fields like 'userId', 'doctorId', and 'date'
    const newAppointment = new Appointment({
      patient,
      doctor,
      date,
      time,
      status: 'pending',
      // Other appointment details as needed
    });
    return await newAppointment.save();
  } catch (error) {
    console.error('Error booking appointment:', error.message);
    throw error;
  }
};

const rejectAppointment = async (appointmentId) => {
  // Implement logic to update the approval status of an appointment in the database
  try {
    const updatedappointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { $set: { status: 'rejected' } },
      { new: true }
    );
    if (!updatedappointment) {
      throw new Error('Appointment not found or already approved/rejected');
    }
    return updatedappointment;
  } catch (error) {
    console.error('Error rejecting appointment:', error.message);
    throw error;
  }
};


module.exports = {
  bookAppointment,
  rejectAppointment,
  getAllAppointments,
  approveAppointment,
  getAppointmentsByDoctorId,
  getAppointmentsByPatientId,
};
