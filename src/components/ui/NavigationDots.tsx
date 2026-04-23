'use client';

interface Props {
    activeSection: number;
}

export default function NavigationDots({ activeSection }: Props) {
    const sections = ['s1', 's2', 's3', 's4'];

    return (
        <nav className="fixed right-7 top-1/2 -translate-y-1/2 flex-col gap-3.5 z-50 hidden md:flex">
            {sections.map((id, index) => (
                <button
                    key={id}
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`w-[7px] h-[7px] rounded-full transition-all duration-350 ${activeSection === index ? 'bg-[#F5D000] scale-150' : 'bg-white/20 hover:bg-white/40'
                        }`}
                    aria-label={`Ir a sección ${index + 1}`}
                />
            ))}
        </nav>
    );
}