import logo from "../../assets/desktop/logo.svg";
import "./auth.css";

const Section = (props) => {
  const { children } = props;
  return (
    <section>
      <div className="container-form container mx-auto">
        <div className="flex justify-center p-10 w-full  ">
          <form className="form w-2/4 h-auto p-10">
            <div className="flex justify-center">
              <img src={logo}></img>
            </div>
            {children}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section;
