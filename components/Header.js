import Link from 'next/link';
import Logo from './Logo';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.nav}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="#">
              <a>National</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Business</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Sports</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
