import useUsers from "../../hooks/useUsers";
import UserCard from "./UserCard";

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
      <div>
        <div>
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <div className="text-2xl font-semibold text-center my-8">
              <h2>Display All Users with Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {users.map((user) => (
                  <UserCard key={user._id} user={user}></UserCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      <div>
        <p className="text-center py-4 font-medium">
          <span className="text-[18px]">©</span> of the website at 2023
        </p>
      </div>
    </div>
  );
};

export default Home;
