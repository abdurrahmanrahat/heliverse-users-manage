import { Link } from "react-router-dom";
import useTeamMembers from "../../hooks/useTeamMembers";

const Team = () => {
  const [teamMembers] = useTeamMembers();
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
    </div>
  );
};

export default Team;
