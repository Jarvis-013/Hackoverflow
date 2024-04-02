import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage';
import SignUp from './components/sign_up';
import Dashboard from './components/dashboard';
import AppointmentCard from './components/Appointment';
import DoctorInfo from './components/docotrs';
import MedicalCard from './components/MedicalHistory';
import MyForm from './components/patient';
import DoctorForm from './components/docotr_create';
import PaymentForm from './components/payment';
import AppointmentForm from './components/make_appointment';
import MedicalHistoryForm from './components/create_medical';
import SignUp_ori from './components/signup';
import AboutUs from './components/about_page';
import Contacts from './components/contact_page';
import PatientFormedit from './components/create_patient';
function App() {
  return (
    <Router>
       <Routes>

<Route exact path="/" element={<LandingPage />} />

</Routes>
      <div>
      <Routes>
      <Route exact path="/sign_up" element={<SignUp />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/Appointment" element={<AppointmentCard />} />
      <Route exact path="/MedicalHistory" element={<MedicalCard />} />
      <Route exact path="/DoctorInfo" element={<DoctorInfo />} />
      <Route exact path="/patient_create" element={<MyForm />} />
      <Route exact path="/doctor_create" element={<DoctorForm />} />
      <Route exact path="/payment" element={<PaymentForm />} />
      <Route exact path="/create_appointment" element={<AppointmentForm />} />
      <Route exact path="/create_medical" element={<MedicalHistoryForm />} />
      <Route exact path="/signup" element={<SignUp_ori />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/contacts" element={<Contacts />} />
      <Route exact path="/create_patient" element={<PatientFormedit />} />
      </Routes>    
      </div>
      
    </Router>
  );
}

export default App;
