// IMPORT IF YOU NEED TO NAVIGATE TO ANOTHER PAGE
import { Link, useNavigate } from 'react-router-dom';

// IMPORT COMPONENTS
import ThemeSwitch from '../darkTheme/switch';

// IMPORT EXTERNAL CSS
import './header.css';

export default function Header({ selected, setSelected }) {
  // CREATE NAVIGATOR
  const navigate = useNavigate();

  return (
    <>
      <header>
        <ThemeSwitch />
        <div className="logo">
          <Link to="/" className="header">Inventory App</Link>
          <img src="./favicon.ico" alt="logo" />
        </div>
      </header>

      <div className="buttonContainer">
        <button type="button" onClick={() => selected === 'Category' ? setSelected(null) || navigate('/') : setSelected('Category') || navigate('/')} className={selected === 'Category' ? `selected` : ''}>Categories</button>
        <button type="button" onClick={() => selected === 'Item' ? setSelected(null) || navigate('/') : setSelected('Item') || navigate('/')} className={selected === 'Item' ? `selected` : ''}>Items</button>
      </div>
    </>
  );
}