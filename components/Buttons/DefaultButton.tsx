import styles from '@/styles/Components/defaultButtonComponent.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DefaultButtonProps {
  icon?: IconProp;
  text: string;
  color: string;
  onClick: () => void;
}

export function DefaultButton({ icon, text, color, onClick }: DefaultButtonProps) {
  return (
    <button className={styles.customButton} style={{ background: color }} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
      <span>{text}</span>
    </button>
  );
}