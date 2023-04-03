import FacebookBtn from './facebook_btn/FacebookBtn';
import InstagramBtn from './instagram_btn/InstagramBtn';
import TwitterBtn from './twitter_btn/TwitterBtn';
import LinkBtn from './link_btn/LinkBtn';
import styles from './Options.module.scss';

const Options = () => {
  return (
    <div className={styles.options}>
      <FacebookBtn />
      <InstagramBtn />
      <TwitterBtn />
      <LinkBtn />
    </div>
  );
};

export default Options;
