import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: true,
                force: 40,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: ['#00F0FF', '#FF00FF', '#FFFFFF', '#9400FF', '#4A00E8'],
          },
          links: {
            color: '#00F0FF',
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.05
            }
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 0.4,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.6
            },
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'star', 'triangle'],
            options: {
              star: {
                sides: 5
              }
            }
          },
          size: {
            value: { min: 1, max: 4 },
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.5
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;