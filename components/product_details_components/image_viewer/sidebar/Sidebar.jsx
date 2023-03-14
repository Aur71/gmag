import Image from 'next/image';
import styles from './Sidebar.module.scss';

// TEMP IMG
import img1 from '../../../../public/temp/computer.png';
import img2 from '../../../../public/temp/laptop.png';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.btns_container}>
        <button className={styles.active}>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img2} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img2} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img2} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
        <button>
          <Image src={img1} alt='temp image' width={100} height={100} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
