const UserCard = ({ user }) => {
  const { first_name, last_name, email, gender, avatar, domain, available } =
    user;
  return <div className="bg-[#111827] p-4">UserCard</div>;
};

export default UserCard;
