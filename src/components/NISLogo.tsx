import { motion } from "framer-motion";

interface NISLogoProps {
  animated?: boolean;
  size?: "small" | "medium" | "large";
}

export function NISLogo({ animated = true, size = "medium" }: NISLogoProps) {
  const sizes = {
    small: {
      container: "w-6 h-6",
      text: "text-sm",
      titleText: "text-sm",
      subtitleText: "text-[8px]",
      gap: "gap-1",
    },
    medium: {
      container: "w-10 h-10",
      text: "text-lg",
      titleText: "text-lg",
      subtitleText: "text-xs",
      gap: "gap-2",
    },
    large: {
      container: "w-16 h-16",
      text: "text-2xl",
      titleText: "text-2xl",
      subtitleText: "text-sm",
      gap: "gap-3",
    },
  };

  const currentSize = sizes[size];

  const LogoContent = () => (
    <div className={`flex items-center ${currentSize.gap}`}>
      <div
        className={`${currentSize.container} bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg flex items-center justify-center`}
      >
        <span className={`text-white font-bold ${currentSize.text}`}>NIS</span>
      </div>
      <div>
        <h1 className={`${currentSize.titleText} leading-tight`}>
          <span className="text-emerald-900">Next Innovation</span>
        </h1>
        <p
          className={`${currentSize.subtitleText} text-slate-500 tracking-wider`}
        >
          SYSTEMS
        </p>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
}

