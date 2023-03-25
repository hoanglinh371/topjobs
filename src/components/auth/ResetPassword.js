import Input from "../shared/Input";
import Section from "./Section";
import Button from "../shared/Button";
import "./auth.css";

const ResetPw = () => {
  return (
    <Section>
      <div>
        <h1 className="text-2xl font-bold my-5 text-white">Reset Password</h1>
        <div className="pt-1">
          <Input type="password" placeholder="NewPassword" />
          <Input type="password" placeholder="ComfirmPassword" />
        </div>
        <Button>Comfirm</Button>
      </div>
    </Section>
  );
};

export default ResetPw;
