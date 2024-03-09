import Button from "../common/Button";
import Input from "./Input";
import "./form.css";

const PersonalInfoForm = () => {
  return (
    <div className="personal-form">
        <h2 className="form-title">Personal Information</h2>
      <div className="parent-grid-container">
        <div>
          <div className="grid-container">
            <Input label="First Name" />
            <Input label="Last Name" />
          </div>
          <div className="grid-container">
            <Input label="City" />
            <Input label="Postal Code" />
          </div>
          <div className="grid-full len">
            <Input label="Address" />
          </div>
          <div className="grid-container">
            <Input label="Email" />
            <Input label="Phone" />
          </div>
          <div className="grid-container">
            <Input label="Password" type="password"/>
          </div>
          <div className="form-text">
            <p>Use this email to log in to your resumedone.io account and receive notifications.</p>
          </div>
          <div className="grid-container btn-container">
            <Button label="Save"/>
          </div>
        </div>
        <div className="profile-pic">
          <img className="candidate-pic img" src="candidate-pic.png" />
        </div>
      </div>
    </div>
  );
};
export default PersonalInfoForm;
