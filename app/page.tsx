import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url(/font.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          style={{
            color: '#ededed',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}>
          <div>
            <Image
              src={'/profilePicture.jpg'}
              alt={'profilePicture'}
              width={200}
              height={200}
              style={{
                borderRadius: 100,
                border: 'solid 4px #ededed',
              }}
            />
          </div>
          <div>
            <h1>MON NOM EST MARC MENDIA</h1>
            <p>DÉVELOPPEUR, GAMER, STREAMER</p>
          </div>
        </div>
      </div>
      <div
        style={{

        }}>
      </div>
    </div>
  );
}
