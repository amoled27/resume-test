const PremiumAccountBanner = () => {
  return (
    <div className="account-banner">
      {/* <div className="premium-logo"> */}
        <div className="premium-logo-container">
            <div className="logo-center">
          <img className="premium-logo" src="premium-logo.png" />

            </div>
        </div>
      {/* </div> */}
      <div className="banner-text">
        <h2 className="banner-main-text">Premium Account</h2>
        <p className="banner-sub-text">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};

export default PremiumAccountBanner;
