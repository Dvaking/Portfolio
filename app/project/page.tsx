import { Card } from '@/components/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
      <Card>Project page</Card>
    </div>
  );
}
