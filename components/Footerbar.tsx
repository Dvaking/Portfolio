import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/footerbar.module.css';

export function FooterBar() {
  return (
    <footer className={styles.footer}>
      
        <div className={styles.container}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Image src={'/logo.png'} alt='Logo' width={40} height={40} />
            <p>MENDIA Marc</p>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 10 }}>
            <p>Contacts: </p>
            <div style={{ display: 'flex', flexDirection: 'row', gap:10, alignItems: 'flex-start' }}>
              <a href='https://github.com/Dvaking' target='_blank' rel='noopener noreferrer'>
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/marc-mendia/'
                target='_blank'
                rel='noopener noreferrer'>
                LinkedIn
              </a>
              <Link href='/contact'>Mail</Link>
            </div>
          </div>
        </div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} MENDIA Marc. Tous droits réservés.
          </p>
    </footer>
  );
}
