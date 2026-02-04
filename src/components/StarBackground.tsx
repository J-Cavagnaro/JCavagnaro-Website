import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration

export const StarBackground = () => {
    interface Star {
        id: number;
        size: number;
        x: number;
        y: number;
        opacity: number;
        animationDuration: number;
    }

    interface Meteor {
        id: number;
        size: number;
        x: number;
        y: number;
        animationDelay: number;
        animationDuration: number;
    }

    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const generateStars = () => {
        const starCount = Math.floor(window.innerWidth * window.innerHeight / 5000); // Number of stars to generate   
        const starArray = [];

        for (let i = 0; i < starCount; i++) {
            starArray.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(starArray);
        return starArray;
    };

    const generateMeteors = () => {
        const meteorCount = 5; // Number of stars to generate   
        const meteorArray = [];

        for (let i = 0; i < meteorCount; i++) {
            meteorArray.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                animationDelay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(meteorArray);
        return meteorArray;
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 20}px`,
                        height: `${meteor.size}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.animationDelay}s`,
                        animationDuration: `${meteor.animationDuration}s`
                    }}
                />
            ))}
        </div>
    );
}