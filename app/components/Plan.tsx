import { useState, useRef } from 'react';

interface Plan {
    id: number;
    name: string;
    price: string;
    description: string;
    features: string[];
    unavailableFeatures?: string[];
    popular?: boolean;
}

const plans: Plan[] = [
    {
        id: 1,
        name: "Basic",
        price: "$9/mo",
        description: "Perfect for individuals getting started",
        features: [
            "Standard image generation",
            "Basic style templates",
            "500 monthly credits",
            "Email support"
        ],
        unavailableFeatures: [
            "Batch processing capabilities",
            "AI-driven image enhancements",
            "Priority customer support"
        ]
    },
    {
        id: 2,
        name: "Premium",
        price: "$29/mo",
        description: "For professionals and growing teams",
        features: [
            "High-resolution image generation",
            "Customizable style templates",
            "Batch processing capabilities",
            "AI-driven image enhancements",
            "2000 monthly credits",
            "Priority customer support"
        ],
        unavailableFeatures: [
            "Real-time collaboration tools",
            "Advanced analytics dashboard"
        ],
        popular: true
    },
    {
        id: 3,
        name: "Enterprise",
        price: "$99/mo",
        description: "For large organizations and teams",
        features: [
            "Unlimited image generation",
            "Advanced customization options",
            "Batch processing capabilities",
            "AI-driven image enhancements",
            "Real-time collaboration tools",
            "Advanced analytics dashboard",
            "Dedicated account manager"
        ]
    }
];

export default function PriceList() {
    return (
        <section className="py-40" data-aos="fade-up" data-aos-duration="1000">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white/80 mb-4">PRICING PLANS</h2>
                    <p className="text-xl text-white/50">Choose the perfect plan for your needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <PriceCard key={plan.id} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PriceCard({ plan, index }: { plan: Plan; index: number }) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = (mouseX / rect.width) * 2 - 1;
        const centerY = (mouseY / rect.height) * 2 - 1;

        const rotateY = centerX * 16;
        const rotateX = -centerY * 16;

        setRotation({ x: rotateX, y: rotateY });

        setGlowPosition({
            x: (mouseX / rect.width) * 100,
            y: (mouseY / rect.height) * 100
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
        setGlowPosition({ x: 50, y: 50 });
    };

    return (
        <div
            className="perspective-1000"
            style={{ perspective: '1000px' }}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="1000"
        >
            <div
                ref={cardRef}
                className={`rounded-xl p-6 border ${plan.popular
                        ? 'border-white/20 bg-white/5 backdrop-blur-xl relative overflow-hidden cursor-pointer group'
                        : 'border-white/20 bg-white/5 backdrop-blur-xl relative overflow-hidden cursor-pointer group'
                    }`}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: isHovered
                        ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
                        : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                    transition: isHovered
                        ? 'transform 0.08s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease-out'
                        : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease-out',
                    transformStyle: 'preserve-3d'
                }}
            >

                <div className="relative z-10" style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="relative">
                            {plan.popular && (
                                <div
                                    className="absolute -top-12 -left-12 w-32 h-24 bg-gradient-to-br from-yellow-500/40 via-yellow-500/20 to-transparent rounded-full blur-2xl"
                                    style={{
                                        transform: isHovered ? 'translateZ(35px)' : 'translateZ(0px)'
                                    }}
                                />
                            )}
                            <h2
                                className={`text-3xl font-bold relative ${plan.popular ? 'text-yellow-500' : 'text-white'
                                    }`}
                                style={{
                                    transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)'
                                }}
                            >
                                {plan.name}
                            </h2>
                        </div>
                        <span
                            className={`text-xl ${plan.popular ? 'text-white/50' : 'text-white/50'
                                }`}
                            style={{
                                transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)'
                            }}
                        >
                            {plan.price}
                        </span>
                    </div>

                    <p
                        className={`mb-6 ${plan.popular ? 'text-white/80' : 'text-white/70'
                            }`}
                        style={{
                            transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)'
                        }}
                    >
                        {plan.description}
                    </p>

                    <ul className="mb-8 space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`size-4 me-2 mt-0.5 ${plan.popular ? 'text-white/80' : 'text-white'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span
                                    className={`text-sm ${plan.popular ? 'text-white/80' : 'text-white/80'
                                        }`}
                                    style={{
                                        transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)'
                                    }}
                                >
                                    {feature}
                                </span>
                            </li>
                        ))}

                        {plan.unavailableFeatures?.map((feature, idx) => (
                            <li key={idx} className="flex items-start opacity-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`size-4 me-2 mt-0.5 ${plan.popular ? 'text-gray-400' : 'text-white/40'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span
                                    className={`text-sm line-through ${plan.popular ? 'text-white/50' : 'text-white/40'
                                        }`}
                                    style={{
                                        transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)'
                                    }}
                                >
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="mt-8"
                        style={{
                            transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)'
                        }}
                    >
                        <button
                            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${plan.popular
                                    ? 'bg-yellow-500/10 text-white hover:bg-yellow-500/20'
                                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                }`}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}