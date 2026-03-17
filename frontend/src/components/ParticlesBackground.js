import React, { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ['#3B82F6', '#06B6D4', '#8B5CF6']
      },
      links: {
        color: '#3B82F6',
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out'
        }
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 60
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1
        }
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'push'
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 3
        }
      }
    },
    detectRetina: true
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
