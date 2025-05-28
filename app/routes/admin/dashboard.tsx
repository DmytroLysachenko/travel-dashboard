import { Header } from "components";

const Dashboard = () => {
  const user = { name: "User" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user.name}`}
        description="Your dashboard"
      />
    </main>
  );
};

export default Dashboard;
