import logo from "@/assets/logo.jpeg";

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <a href="/" className="flex items-center gap-2 group">
      <img
        src={logo}
        alt="GrowizPro"
        className={`${className} w-auto object-contain group-hover:scale-105 transition-transform`}
      />
    </a>
  );
}
