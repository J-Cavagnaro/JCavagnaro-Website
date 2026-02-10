

export const CircuitBackground = () => {
    interface Particle {
        id: number;
        delay: number;   // animation-delay in seconds
        size: number;    // width & height in px
        opacity: number;
        glow: string;    // box-shadow value
    }

    interface ElectronStream {
        id: number;
        startX: string;  // CSS value like '10vw'
        startY: string;  // CSS value like '20vh'
        animationDelay: number; // delay before entire stream starts (in seconds)
    }

    const HEAD: Particle = {
        id: 0,
        delay: 0,
        size: 9,
        opacity: 1,
        /* glow has three layers, inner - small tight glow, middle - meadium halo, outer - large soft diffusion */
        /* each layer has 5 properties, x-offset, y-offset, blur-radius, spread-radius, color */
        /* glow does not affect the solid color of the particle */
        glow: '0 0 5px 2px var(--color-primary), 0 0 14px 5px var(--color-primary), 0 0 28px 8px var(--color-primary)',
    };

    const TRAIL: Particle[] = [
        { id: 1, delay: 0.04, size: 8, opacity: 0.75, glow: '0 0 8px 3px var(--color-primary)' },
        { id: 2, delay: 0.09, size: 7, opacity: 0.55, glow: '0 0 7px 2px var(--color-primary)' },
        { id: 3, delay: 0.15, size: 6, opacity: 0.38, glow: '0 0 5px 2px var(--color-primary)' },
        { id: 4, delay: 0.22, size: 5, opacity: 0.24, glow: '0 0 4px 1px var(--color-primary)' },
        { id: 5, delay: 0.30, size: 4, opacity: 0.14, glow: '' },
        { id: 6, delay: 0.40, size: 3, opacity: 0.07, glow: '' },
        { id: 7, delay: 0.52, size: 2, opacity: 0.03, glow: '' },
    ];

    const STREAMS: ElectronStream[] = [
        { id: 1, startX: '0vw',   startY: '15vh',  animationDelay: 0 },
        { id: 2, startX: '0vw',   startY: '50vh',  animationDelay: 2 },
        { id: 3, startX: '0vw',   startY: '75vh',  animationDelay: 4 },
        { id: 4, startX: '20vw',  startY: '0vh',   animationDelay: 1.5 },
        { id: 5, startX: '60vw',  startY: '0vh',   animationDelay: 3.5 },
        { id: 6, startX: '90vw',  startY: '0vh',   animationDelay: 5.5 },
    ];

    function ParticleNode({ 
        particle, 
        isHead, 
        streamDelay,
        streamId 
    }: { 
        particle: Particle; 
        isHead?: boolean;
        streamDelay: number;
        streamId: number;
    }) {
        const { delay, size, opacity, glow } = particle;
        return (
            <div
                className={`particle stream-${streamId}`}
                style={{
                    width: size,
                    height: size,
                    opacity,
                    animationDelay: `${delay + streamDelay}s`,
                    boxShadow: glow || undefined,
                    /* the background property sets the solid color of the particle */
                    background: isHead ? 'var(--color-primary-foreground)' : undefined,
                    zIndex: isHead ? 10 : undefined,
                }}
            />
        );
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {STREAMS.map((stream) => (
                <div key={stream.id}>
                    <style>
                        {`
                            .stream-${stream.id} {
                                --start-x: ${stream.startX};
                                --start-y: ${stream.startY};
                            }
                        `}
                    </style>
                    {/* Trail — rendered farthest-first so head sits on top */}
                    {[...TRAIL].reverse().map((particle) => (
                        <ParticleNode 
                            key={`stream-${stream.id}-trail-${particle.id}`} 
                            particle={particle}
                            streamDelay={stream.animationDelay}
                            streamId={stream.id}
                        />
                    ))}

                    {/* Electron head */}
                    <ParticleNode 
                        particle={HEAD} 
                        isHead
                        streamDelay={stream.animationDelay}
                        streamId={stream.id}
                    />
                </div>
            ))}
        </div>
    );
};