import styles from "./Components.module.css";

const Notification = ({message, icon}) => {
  return (
    <div className={`${styles.notification}`}>
      <img src={icon} alt={message} />
      <span>{message}</span>
    </div>
  );
};

export default Notification;
