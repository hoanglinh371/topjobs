import logo from '../../assets/desktop/logo.svg';
import './auth.css';

const Section = (props) => {
  const { children } = props;
  return (
    <div className='section'>
      <div className='container-form container mx-auto'>
        <div className='flex justify-center p-10 w-full items-center'>
          <form className='form w-2/4 h-auto p-10'>
            <div className='flex justify-center'>
              <img src={logo}></img>
            </div>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section;
