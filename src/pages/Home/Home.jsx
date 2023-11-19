import useUsers from "../../hooks/useUsers";
import UserCard from "./UserCard";

const Home = () => {
  const [users, , isLoading, page, setPage, limit] = useUsers();
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
            <div className="text-center my-8">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="text-2xl font-semibold text-center my-8">
              <h2>Display All Users with Card</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                {users.map((user) => (
                  <UserCard key={user._id} user={user}></UserCard>
                ))}
              </div>

              {/* pagination btn */}
              <div className="flex items-center justify-center md:justify-end mt-8">
                <div className="join font-semibold">
                  <button
                    className="join-item btn text-[20px]"
                    onClick={() => {
                      page === 1 ? setPage(1) : setPage(page - 1);
                    }}
                    disabled={page === 1}
                  >
                    «
                  </button>
                  <button className="join-item btn font-semibold text-[17px]">
                    {page}
                  </button>
                  <button
                    className="join-item btn text-[20px]"
                    onClick={() => {
                      page === Math.round(2000 / limit)
                        ? setPage(Math.round(2000 / limit))
                        : setPage(page + 1);
                    }}
                    disabled={page === Math.round(2000 / limit)}
                  >
                    »
                  </button>
                </div>
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
