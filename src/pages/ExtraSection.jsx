import React from "react";

const logos = [
    "https://cdn.worldvectorlogo.com/logos/forbes.svg",
    "https://cdn.worldvectorlogo.com/logos/bbc.svg",
    "https://cdn.worldvectorlogo.com/logos/the-verge-2.svg"
];

const ExtraSection = () => {
    return (
        <div className="my-12 px-4">

            {/* Title */}
            <p className="font-bold text-3xl md:text-5xl text-center mb-10">
                We are featured in
            </p>

            {/* Marquee Wrapper */}
            <div className="relative w-full overflow-hidden py-4">

                <div className="flex items-center gap-10 animate-scroll">

                    {/* First Logo Set */}
                    {logos.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            className="w-24 sm:w-32 md:w-40 h-auto object-contain"
                            alt="Brand Logo"
                        />
                    ))}

                    {/* Duplicate for looping effect */}
                    {logos.map((src, i) => (
                        <img
                            key={`dup-${i}`}
                            src={src}
                            className="w-24 sm:w-32 md:w-40 h-auto object-contain"
                            alt="Brand Logo"
                        />
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
