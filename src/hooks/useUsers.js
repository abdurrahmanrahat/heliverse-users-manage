import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect } from "react";

const useUsers = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const fetchUsers = async () => {
    const res = await axios.get(`http://localhost:5000/users?limit=${limit}&page=${page}`);
    return res.data;
  };

  const { data: users, refetch, isLoading } = useQuery(["users", limit, page], fetchUsers);

  // Update the query key when limit or page changes
  useEffect(() => {
    refetch();
  }, [limit, page, refetch]);

  return [users, refetch, isLoading, page, setPage, limit, setLimit];
};

export default useUsers;
