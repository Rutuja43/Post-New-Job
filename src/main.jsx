import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





{/*const JobForm = () => {
  return (
    <div className="form-container">
      <h2>Post a New Job</h2>
      <div className="steps">
        <div className="step active">🗂 Job Details</div>
        <div className="step">💰 Payment and package</div>
        <div className="step">✅ Confirmation</div>
      </div>

      <form className="job-form">
        <label>Job title</label>
        <input type="text" placeholder="E.g Senior UI/UX designer" />

        <label>Add your job description *</label>
        <textarea placeholder="Description" rows={4}></textarea>

        <label>Job location</label>
        <input type="text" placeholder='e.g "Pune"' />

        <div className="form-row">
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Company name" />
          <input type="date" />
        </div>

        <label>Job Type</label>
        <select>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Contract</option>
        </select>
      </form>
    </div>
  );
};

export default JobForm;*/}
