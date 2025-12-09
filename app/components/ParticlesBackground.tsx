'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles loaded', container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#0a0a0a',
        },
      },
      fpsLimit: 60,
      smooth: true,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 120,
            duration: 0.6,
            easing: 'ease-out-quad',
          },
        },
      },
      particles: {
        color: {
          value: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'],
        },
        links: {
          color: '#10b981',
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          attract: {
            enable: true,
            rotate: {
              x: 600,
              y: 600,
            },
          },
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
            bottom: 'out',
          },
          random: false,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          value: 100,
        },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.3,
            sync: false,
            startValue: 'random',
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
            startValue: 'random',
          },
        },
        life: {
          count: 0,
          duration: {
            sync: false,
            value: {
              min: 12,
              max: 20,
            },
          },
        },
      },
      emitters: [
        {
          direction: 'top',
          rate: {
            delay: 0.4,
            quantity: 1,
          },
          position: {
            x: 50,
            y: 100,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
        {
          direction: 'right',
          rate: {
            delay: 0.4,
            quantity: 1,
          },
          position: {
            x: 0,
            y: 50,
          },
          size: {
            width: 0,
            height: 100,
          },
        },
        {
          direction: 'left',
          rate: {
            delay: 0.4,
            quantity: 1,
          },
          position: {
            x: 100,
            y: 50,
          },
          size: {
            width: 0,
            height: 100,
          },
        },
        {
          direction: 'bottom',
          rate: {
            delay: 0.4,
            quantity: 1,
          },
          position: {
            x: 50,
            y: 0,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
      ],
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
