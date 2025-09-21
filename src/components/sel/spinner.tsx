import clsx from "clsx";

type SpinnerProps = {
  className?: string;
};


const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/70"
      role="status"
      aria-live="polite"
      >
      <svg
        className={clsx("animate-spin text-primary", className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Loading spinner"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.343A8.001..."
        />
      </svg>
    </div>
  );
};

export default Spinner;
