import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const useUsers = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const [availability, setAvailability] = useState("");
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  }

  // const fetchUsers = async () => {
  //   const res = await axios.get(`http://localhost:5000/users?limit=${limit}&page=${page}&gender=${gender}&domain=${domain}&availability=${availability}`);
  //   return res.data;
  // };

  const { data: users, refetch, isLoading } = useQuery(["users", limit, page], async () => {
    const res = await axios.get(`http://localhost:5000/users?limit=${limit}&page=${page}&gender=${gender}&domain=${domain}&availability=${availability}&search=${search}`);
    return res.data;
  });

  // Update the query key when limit or page changes
  useEffect(() => {
    refetch();
  }, [limit, page, refetch, gender, domain, availability, search]);

  return [users, refetch, isLoading, page, setPage, limit, setGender, setDomain, setAvailability, searchRef, handleSearch];
};

export default useUsers;
