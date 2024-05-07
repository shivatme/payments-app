import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={"1000"} />
        <Users />
      </div>
    </div>
  );
};
