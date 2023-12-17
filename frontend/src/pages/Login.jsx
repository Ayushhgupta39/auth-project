import { Heading } from "@radix-ui/themes";
import Input from "../components/Input";

function Login() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Heading align={"center"}>Welcome to the Auth System project</Heading>

      <div className="my-4 flex justify-center w-full">
        <Input />
      </div>
    </div>
  );
}

export default Login;
