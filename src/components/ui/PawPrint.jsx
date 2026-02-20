export default function PawPrint({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <ellipse cx="45" cy="55" rx="12" ry="14" />
        <circle cx="30" cy="35" r="6" />
        <circle cx="45" cy="28" r="6" />
        <circle cx="60" cy="35" r="6" />
        <circle cx="68" cy="48" r="5" />
      </g>
    </svg>
  );
}
