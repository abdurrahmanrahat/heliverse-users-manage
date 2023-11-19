const UserCard = ({ user }) => {
    const { first_name, last_name, email, gender, avatar, domain, available } = user;
  
    return (
      <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <img src={avatar} alt="User Avatar" className="w-20 h-20 rounded-full" />
          <span className="text-white text-xl font-medium">
            {first_name} {last_name}
          </span>
        </div>
        <div className="mt-4 text-[16px] flex flex-col">
          <p className="text-gray-400">Email: {email}</p>
          <p className="text-gray-400 -m-2">Gender: {gender}</p>
          <p className="text-gray-400">Domain: {domain}</p>
          <p className="text-gray-400 -m-2">Available: {available ? 'Yes' : 'No'}</p>
        </div>
      </div>
    );
  };
  
  export default UserCard;
  