import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";

const useUsers = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [gender, setGender] = useState("");

  const fetchUsers = async () => {
    const res = await axios.get(`http://localhost:5000/users?limit=${limit}&page=${page}&gender=${gender}`);
    return res.data;
  };
  console.log(gender);

  const { data: users, refetch, isLoading } = useQuery(["users", limit, page], fetchUsers);

  // Update the query key when limit or page changes
  useEffect(() => {
    refetch();
  }, [limit, page, refetch]);

  return [users, refetch, isLoading, page, setPage, limit, setGender];
};

export default useUsers;
