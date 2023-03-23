import Image from 'next/image';
import Link from 'next/link';
import styles from './Comment.module.scss';
import userImg from '../../../../../../../../public/user.png';

const Comment = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.author}>
        <Link href='#'>
          <Image src={userImg} alt='user image' width={50} height={50} />
        </Link>

        <div>
          <h5>User Name</h5>
          <p>18 Mar 2023</p>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam maxime
        amet iusto sequi provident perspiciatis deleniti reiciendis impedit?
        Explicabo, vitae. Reprehenderit vero, explicabo delectus commodi hic
        dolores earum nihil fuga molestiae, quaerat similique repellendus, iusto
        mollitia iure illum autem. Omnis?
      </p>
    </div>
  );
};

export default Comment;
