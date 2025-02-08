'use client';

import styles from '@/styles/Components/pinnedRepositoryComponent.module.css';
import { DefaultButton } from '@/components';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Repositories } from '@/types/github';
import { fetchPinnedRepos } from '@/utils/github';
import { PinnedCard } from '@/components';

interface PinnedRepositoryProps {
  isMobile: boolean;
}

export function PinnedRepository({ isMobile }: PinnedRepositoryProps) {

  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<Repositories[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPinnedRepos({ setError, setLoading, setRepositories: setRepos });
  }, []);

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
        </div>
      </div>

      <div className={`${styles.infoSection} ${isMobile ? styles.mobile : ''}`}>
        {loading ? (
          <PinnedCard
            name='Loading...'
            description='Please wait while we fetch the data.'
            buttonText='Loading'
            isMobile={isMobile}
          />
        ) : error || repos.length === 0 ? (
          <PinnedCard
            name='Error'
            description='No repositories found.'
            buttonText='Retry'
            isMobile={isMobile}
          />
        ) : (
          repos
            .slice(0, 4)
            .map(repo => (
              <PinnedCard
                key={repo.name}
                buttonText='View More'
                description={repo.description}
                name={repo.name}
                isMobile={isMobile}
                onClick={() => window.open(repo.url)}
              />
            ))
        )}
      </div>
    </div>
  );
}
