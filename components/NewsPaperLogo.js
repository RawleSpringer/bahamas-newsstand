import guardianLogo from '../assets/guardian-logo.svg';
import ewLogo from '../assets/ew-logo.svg';
import tribuneLogo from '../assets/tribune-logo.svg';
import TribuneLogo from './TribuneLogo';

const NewspaperLogo = ({ newspaper }) => {
  let imageLogoSrc;

  if (newspaper === 'guardian') {
    imageLogoSrc = guardianLogo;
  } else if (newspaper === 'ew') {
    imageLogoSrc = ewLogo;
  } else {
    imageLogoSrc = TribuneLogo;
  }

  return <img src={imageLogoSrc.src} height="150px" width="200px" />;
};

export default NewspaperLogo;
