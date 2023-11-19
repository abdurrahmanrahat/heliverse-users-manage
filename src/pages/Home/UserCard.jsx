import toast from "react-hot-toast";

const UserCard = ({ user }) => {
  const {
    _id,
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  } = user;

  const handleSelectForTeam = () => {
    const newMember = {
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
      beforeId: _id,
    };

    // send cart product to db
    fetch("http://localhost:5000/teamMembers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMember),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("New member added");
        }
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <div className="bg-[#111827] p-6 rounded-lg shadow-lg ">
      <div className="flex items-center justify-between">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full"
        />
        <span className="text-white text-xl font-medium">
          {first_name} {last_name}
        </span>
      </div>
      <div className="">
        <div className="mt-4 mr-10 text-[16px] flex flex-col text-center">
          <p className="text-gray-300">Email: {email}</p>
          <p className="text-gray-300 -m-1">Gender: {gender}</p>
          <p className="text-gray-300">Domain: {domain}</p>
          <p className="text-gray-300 -m-1">
            Available: {available ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex items-center justify-end -mt-6">
          <button
            onClick={handleSelectForTeam}
            className="bg-[#EE9322] hover:bg-[#f39726] text-white font-semibold py-[6px] px-[14px] rounded-full transform hover:scale-105 transition-transform duration-300"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
