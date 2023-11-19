import axios from "axios";
import { useQuery } from "react-query";

const useTeamMembers = () => {
  const {
    data: teamMembers,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/teamMembers");
      return res.data;
    },
  });

  return [teamMembers, refetch, isLoading];
};

export default useTeamMembers;
