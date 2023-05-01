import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SuccessNotification.module.scss';
import { GrFormClose } from 'react-icons/gr';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import getCurrentTime from '@/utils/getCurrentTime';
import { removeNotification } from '@/redux/reducers/notificationsSlice';

const SuccessNotification = ({ notification }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const time = getCurrentTime();

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      dispatch(removeNotification(notification.id));
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch, notification.id]);

  return (
    <div
      className={`${styles.succes_notification} ${
        visible && styles.showNotification
      }`}
    >
      <div className={styles.timer}></div>
      <IoIosCheckmarkCircle className={styles.icon} />
      <h6>Success</h6>
      <button onClick={() => dispatch(removeNotification(notification.id))}>
        <GrFormClose />
      </button>
      <p>{notification.message}</p>
      <span>{time}</span>
    </div>
  );
};

export default SuccessNotification;
