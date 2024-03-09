import DeleteAccount from "./Card/DeleteAccount";
import PremiumAccountBanner from "./banner/PremiumAccountBanner";
import PersonalInfoForm from "./form/PersonalInfoForm";

const Main = () => {
  return (
    <div className="main-content">
      <PremiumAccountBanner />
      <PersonalInfoForm />
      <p className="feedbk">
        <input type="checkbox" className="check"/>
        Show my profile to serious employers on <a>hirethesbest.io</a> for free
      </p>
      <DeleteAccount />
      <p className="card-text feedback">
        Get in touch with our support team if you have any question or want to
        leave some feedback. We’ll be happy to hear from you.
      </p>
    </div>
  );
};

export default Main;
