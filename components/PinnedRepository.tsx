'use client';

import styles from '@/styles/Components/pinnedRepositoryComponent.module.css';
import { InformationBox, DefaultButton } from '@/components';
import { homeInfo } from '@/utils/homeInfo';
import { useRouter } from 'next/navigation';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Repositories } from '@/types/github';
import { fetchPinnedRepos } from '@/utils/github';

interface PinnedRepositoryProps {
  isMobile: boolean;
}

export function PinnedRepository({ isMobile }: PinnedRepositoryProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<Repositories[]>([]);


   useEffect(() => {
     fetchPinnedRepos({ setError, setLoading, setRepositories: setRepos });
   }, []);

  console.log(repos);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <div className={`${styles.textSection} ${isMobile ? styles.mobile : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h1>Pinned</h1>
          <h1 style={{ color: '#00e6e6' }}>Repositories</h1>
        </div>
        <div className={`${styles.separator} ${isMobile ? styles.mobile : ''}`}></div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
          <DefaultButton
            icon={faGithub}
            color='#28214D'
            text='View on Github'
            onClick={() => window.open('https://github.com/Dvaking?tab=repositories')}
          />
          <DefaultButton
            color='#28214D'
            text='View more project'
            onClick={() => router.push('/project')}
          />
        </div>
      </div>

      <div className={`${styles.infoSection} ${isMobile ? styles.mobile : ''}`}>
        {homeInfo.map((info, index) => (
          <InformationBox
            description={info.description}
            icon={info.icon}
            title={info.title}
            isMobile={isMobile}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
function setError(arg0: string) {
  throw new Error('Function not implemented.');
}
