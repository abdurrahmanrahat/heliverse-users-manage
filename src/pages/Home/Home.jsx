import useUsers from "../../hooks/useUsers";

const Home = () => {
  const [users, , isLoading] = useUsers();
  return (
    <div className="mx-4 md:mx-10 lg:mx-14 2xl:mx-20">
      {/* header */}
      <div>
        <ul>
          <li>Homepage</li>
        </ul>
      </div>

      {/* body */}
      <div>Users: {users?.length}</div>
    </div>
  );
};

export default Home;
