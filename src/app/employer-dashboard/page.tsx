import { Button } from "@/components/ui/button";
import { logoutUserAction } from "@/features/auth/server/auth.actions";

const EmployerDashboard = () => {
  return (
    <>
      <h1>Welcome Employers</h1>
      <Button onClick={logoutUserAction}>Logout</Button>
    </>
  );
};

export default EmployerDashboard;
