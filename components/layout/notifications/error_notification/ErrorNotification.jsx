import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ErrorNotification.module.scss';
import { GrFormClose } from 'react-icons/gr';
import { MdOutlineError } from 'react-icons/md';
import getCurrentTime from '@/utils/getCurrentTime';
import { removeNotification } from '@/redux/reducers/notificationsSlice';

const ErrorNotification = ({ notification }) => {
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
      className={`${styles.error_notification} ${
        visible && styles.showNotification
      }`}
    >
      <div className={styles.timer}></div>
      <MdOutlineError className={styles.icon} />
      <h6>Error</h6>
      <button onClick={() => dispatch(removeNotification(notification.id))}>
        <GrFormClose />
      </button>
      <p>{notification.message}</p>
      <span>{time}</span>
    </div>
  );
};

export default ErrorNotification;
