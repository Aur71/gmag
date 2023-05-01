import { useSelector } from 'react-redux';
import SuccessNotification from './succes_notification/SuccessNotification';
import ErrorNotification from './error_notification/ErrorNotification';
import styles from './Notifications.module.scss';

const Notifications = () => {
  const { notifications } = useSelector((state) => state.notifications);

  return (
    <div className={styles.notifications}>
      {notifications.map((notification) => {
        const { type } = notification;

        if (type === 'success')
          return (
            <SuccessNotification
              notification={notification}
              key={notification.id}
            />
          );
        if (type === 'error')
          return (
            <ErrorNotification
              notification={notification}
              key={notification.id}
            />
          );
      })}
    </div>
  );
};

export default Notifications;
