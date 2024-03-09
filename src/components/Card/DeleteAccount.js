import NakedButton from "../common/NakedButton";

const DeleteAccount = () => {
  return (
    <div className="delete-card">
      <p className="card-head">Delete account</p>
      <p className="card-text">
        If you delete your account you'll be permanently removing it from out
        systems - you can't undo it
      </p>
      <NakedButton label="Yes, Delete my account" />
    </div>
  );
};

export default DeleteAccount;
