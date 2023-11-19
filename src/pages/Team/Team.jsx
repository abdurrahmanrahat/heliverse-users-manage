import { Link } from "react-router-dom";
import useTeamMembers from "../../hooks/useTeamMembers";
import toast from "react-hot-toast";

const Team = () => {
  const [teamMembers, refetch] = useTeamMembers();

  // handle delete user function
  const handleDeleteMember = (member) => {
    fetch(`http://localhost:5000/teamMembers/${member._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("User delete successfully.");
        }
      });
  };

  return (
    <div>
      {/* header */}
      <div className="flex items-center justify-center pt-8">
        <ul className="flex gap-4 font-medium text-[18px] uppercase">
          <Link to="/">
            <li className="hover:text-[#EE9322] duration-300">Home</li>
          </Link>
          <Link to="/team">
            <li className="hover:text-[#EE9322] duration-300">Team</li>
          </Link>
        </ul>
      </div>
      <div className="divider divider-neutral"></div>

      {/* team design start */}
      <div>
        <h2 className="text-[32px] text-center font-medium">
          Welcome to your personal team
        </h2>
        <p className="mx-6 md:mx-24 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          dolorem ab voluptas harum, soluta, consequuntur quam molestias, quo
          accusantium illum fuga maxime. Maxime eius deleniti dolorum, eaque
          fugiat doloremque tempore!
        </p>
        <h4 className="text-center text-[24px] mt-4">Members Count: {teamMembers?.length}</h4>
      </div>
      {/* Table Here */}
      <div className="overflow-x-auto p-10">
        <table className="table shadow-lg text-white text-lg ">
          {/* head */}
          <thead className="py-2">
            <tr className="bg-gray-900 text-white text-lg">
              <th className="py-4">#</th>
              <th className="text-left">Avatar</th>
              <th className="text-left">Member Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Gender</th>
              <th className="text-right pe-4">Domain</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index} className=" text-white ">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-16 h-16">
                        <img
                          src={member.avatar}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-lg">
                    <span className="badge text-lg">
                      {member.first_name}
                      {member.last_name}
                    </span>
                  </div>
                </td>
                <td className="text-lg">{member.email}</td>
                <td className="text-lg">{member.gender}</td>
                <td className="text-lg text-right">{member.domain}</td>
                <td>
                  <button
                    className="text-[16px] font-semibold bg-[#EE9322] px-2 py-1 rounded"
                    onClick={() => handleDeleteMember(member)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
