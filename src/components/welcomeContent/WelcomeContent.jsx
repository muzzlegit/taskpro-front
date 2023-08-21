import { Logo } from 'components';
import userPNGx1 from 'assets/welcome/welcome.png';
import userPNGx2 from 'assets/welcome/welcome@2x.png';
import userPNGx3 from 'assets/welcome/welcome@3x.png';
import userWEBPx1 from 'assets/welcome/welcome.webp';
import userWEBPx2 from 'assets/welcome/welcome@2x.webp';
import userWEBPx3 from 'assets/welcome/welcome@3x.webp';

const WelcomeContent = () => {
  return (
    <div>
      <picture>
        <source
          srcSet={`${userPNGx1} 1x,
                    ${userPNGx2} 2x
                    ${userPNGx3} 3x`}
          type="image/webp"
        />
        <img
          srcSet={`${userWEBPx1} 1x,
                    ${userWEBPx2} 2x
                    ${userWEBPx3} 3x`}
          src={userPNGx1}
          alt="user with leptop"
          width="162"
          height="162"
        />
      </picture>
      <Logo variant="welcome" />
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
    </div>
  );
};

export default WelcomeContent;
