interface LogoProps {
  variant?: "dark" | "light";
  size?: "small" | "medium" | "large";
}

export function Logo({ variant = "dark", size = "large" }: LogoProps) {
  const sizes = {
    small: { container: "w-48", icon: 40, text: "text-xl" },
    medium: { container: "w-64", icon: 56, text: "text-2xl" },
    large: { container: "w-96", icon: 80, text: "text-4xl" },
  };

  const colors = {
    dark: {
      primary: "#0D4C3D",
      secondary: "#15624E",
      accent: "#1E7A5F",
      text: "#0D4C3D",
      subtext: "#475569",
    },
    light: {
      primary: "#10B981",
      secondary: "#34D399",
      accent: "#6EE7B7",
      text: "#FFFFFF",
      subtext: "#E2E8F0",
    },
  };

  const currentSize = sizes[size];
  const currentColors = colors[variant];

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Logo Icon */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Background subtle circuit pattern */}
        <circle cx="40" cy="60" r="3" fill={currentColors.accent} opacity="0.3" />
        <circle cx="160" cy="140" r="3" fill={currentColors.accent} opacity="0.3" />
        <line x1="40" y1="60" x2="60" y2="60" stroke={currentColors.accent} strokeWidth="1" opacity="0.2" />
        <line x1="140" y1="140" x2="160" y2="140" stroke={currentColors.accent} strokeWidth="1" opacity="0.2" />
        
        {/* Letter N */}
        <path
          d="M35 80 L35 120 L40 120 L40 90 L70 120 L75 120 L75 80 L70 80 L70 110 L40 80 Z"
          fill={currentColors.primary}
        />
        
        {/* Letter I with circuit node on top */}
        <rect x="92.5" y="80" width="5" height="40" fill={currentColors.primary} />
        <circle cx="95" cy="75" r="4" fill={currentColors.accent} className="animate-[pulse_2s_ease-in-out_infinite]" />
        <line x1="95" y1="75" x2="95" y2="80" stroke={currentColors.accent} strokeWidth="1.5" />
        
        {/* Letter S */}
        <path
          d="M125 87 C125 82 128 80 133 80 C138 80 141 82 141 87 L136 87 C136 85 135 84 133 84 C131 84 130 85 130 87 C130 89 131 90 135 92 C140 94 146 96 146 103 C146 108 143 120 133 120 C128 120 125 118 125 113 L130 113 C130 115 131 116 133 116 C135 116 141 116 141 103 C141 101 140 100 136 98 C131 96 125 94 125 87 Z"
          fill={currentColors.primary}
        />
        
        {/* Circuit connections and nodes */}
        {/* Top circuit line */}
        <line x1="20" y1="50" x2="180" y2="50" stroke={currentColors.secondary} strokeWidth="2" opacity="0.5" />
        <circle cx="55" cy="50" r="4" fill={currentColors.secondary} />
        <circle cx="95" cy="50" r="4" fill={currentColors.accent} />
        <circle cx="135" cy="50" r="4" fill={currentColors.secondary} />
        <line x1="55" y1="50" x2="55" y2="65" stroke={currentColors.secondary} strokeWidth="1.5" opacity="0.4" />
        <line x1="135" y1="50" x2="135" y2="65" stroke={currentColors.secondary} strokeWidth="1.5" opacity="0.4" />
        
        {/* Bottom circuit line */}
        <line x1="20" y1="150" x2="180" y2="150" stroke={currentColors.secondary} strokeWidth="2" opacity="0.5" />
        <circle cx="55" cy="150" r="4" fill={currentColors.accent} />
        <circle cx="95" cy="150" r="4" fill={currentColors.secondary} />
        <circle cx="135" cy="150" r="4" fill={currentColors.accent} />
        <line x1="55" y1="135" x2="55" y2="150" stroke={currentColors.secondary} strokeWidth="1.5" opacity="0.4" />
        <line x1="135" y1="135" x2="135" y2="150" stroke={currentColors.secondary} strokeWidth="1.5" opacity="0.4" />
        
        {/* Corner circuit nodes with upward arrow indicators */}
        <path d="M165 60 L165 140" stroke={currentColors.accent} strokeWidth="2" opacity="0.3" />
        <path d="M160 65 L165 60 L170 65" stroke={currentColors.accent} strokeWidth="2" fill="none" opacity="0.5" />
        
        <path d="M25 140 L25 60" stroke={currentColors.accent} strokeWidth="2" opacity="0.3" />
        <path d="M20 65 L25 60 L30 65" stroke={currentColors.accent} strokeWidth="2" fill="none" opacity="0.5" />
        
        {/* Animated pulsing nodes */}
        <circle cx="55" cy="50" r="6" fill="none" stroke={currentColors.secondary} strokeWidth="1" opacity="0.4" className="animate-[ping_3s_ease-out_infinite]" />
        <circle cx="135" cy="150" r="6" fill="none" stroke={currentColors.accent} strokeWidth="1" opacity="0.4" className="animate-[ping_3s_ease-out_infinite_1s]" />
      </svg>

      {/* Company Name */}
      <div className="text-center">
        <h1 
          className={`${currentSize.text} tracking-tight mb-1`}
          style={{ color: currentColors.text }}
        >
          <span className="font-bold">Next</span>{" "}
          <span className="font-light">Innovation</span>
        </h1>
        <p 
          className="tracking-[0.3em] uppercase text-sm"
          style={{ color: currentColors.subtext }}
        >
          Systems
        </p>
      </div>
    </div>
  );
}