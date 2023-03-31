import styles from './Navigation.module.scss';

const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <div className={styles.navigation}>
      <button
        className={`${activeSection === 'Recommendations' && styles.active}`}
        onClick={() => setActiveSection('Recommendations')}
      >
        Recommendations
        <span></span>
      </button>

      <button
        className={`${activeSection === 'Recently viewed' && styles.active}`}
        onClick={() => setActiveSection('Recently viewed')}
      >
        Recently viewed
        <span></span>
      </button>
    </div>
  );
};

export default Navigation;
