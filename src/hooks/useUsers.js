import { useQuery } from "react-query";
import axios from "axios";

const useUsers = () => {

  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios(
        "http://localhost:5000/users"
      );
      return res.data;
    },
  });

  return [users, refetch, isLoading];
};

export default useUsers;
