import chartImage1 from '../assets/chart1.png';
import chartImage2 from '../assets/chart2.png';
import useAuth from '../hooks/useAuth';
const Dashboard = () => {
  const { user } = useAuth();
  console.log(user.email);
  return (
    <div>
      <div className="p-10">
        <div className="card max-w-screen-lg mx-auto bg-base-100 shadow-xl image-full">
          <figure>
            <img src={user?.photoURL} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user?.displayName}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col xl:flex-row">
        <div>
          <img className=" rounded-xl" src={chartImage1} alt="" />
        </div>
        <div className="block xl:hidden 2xl:block">
          <img className="rounded-xl" src={chartImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
