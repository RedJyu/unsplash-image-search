import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const { isDark, toggleDark } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDark}>
        {isDark ? (
          <BsFillSunFill className='toggle-icon' />
        ) : (
          <BsFillMoonFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default DarkModeToggle;
