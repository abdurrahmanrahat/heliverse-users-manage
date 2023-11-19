import useUsers from "../../hooks/useUsers";
import UserCard from "./UserCard";

const Home = () => {
  const [users, refetch, isLoading, page, setPage, limit, setGender] =
    useUsers();
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
            <div className=" my-8">
              <h2 className="text-2xl font-semibold text-center">
                Display All Users with Card
              </h2>

              {/* search and filter option */}
              <div className="md:flex text-center justify-between items-center md:px-24 my-10">
                <div className="input-group pl-14 md:pl-0 pb-4 md:pb-0">
                  <input
                    type="text"
                    placeholder="Search…"
                    // ref={searchRef}
                    className="input input-bordered rounded-md bg-black"
                  />
                  <button className="btn btn-square border-none bg-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-md">Gender</span>
                  <select
                    className=" px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none"
                    onChange={(e) => {
                      setGender(e.target.value);
                    //   refetch();
                    //   if(isLoading){
                    //     <h2>Loading...</h2>
                    //   }
                    }}
                  >
                    <option disabled selected>
                      default
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Bigender</option>
                    <option>Agender</option>
                  </select>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-md">Domain</span>
                  <select className=" px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none">
                    <option disabled selected>
                      default
                    </option>
                    <option>Sales</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Management</option>
                    <option>UI Designing</option>
                  </select>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-md">Availability</span>
                  <select className=" px-3 py-3 bg-[#000000a4] rounded-sm focus:outline-none">
                    <option disabled selected>
                      default
                    </option>
                    <option>Available</option>
                    <option>Not Available</option>
                  </select>
                </div>
              </div>

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
