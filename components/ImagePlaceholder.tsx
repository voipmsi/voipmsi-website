import { ImageIcon } from "lucide-react";

/**
 * Labeled photo slot. Renders a clean, branded placeholder that names the exact
 * shot to drop in and carries the production alt text. This keeps layouts intact
 * WITHOUT inventing or AI-generating imagery (per the brief's image rules).
 *
 * To go live: replace this component with next/image, e.g.
 *   <Image src="/images/network-rack-install.webp" alt={alt} fill className="object-cover" />
 * Keep the same `alt` string.
 */
interface ImagePlaceholderProps {
  /** Production alt text — written for accessibility + SEO. */
  alt: string;
  /** Short label shown on the placeholder describing the shot to capture. */
  label: string;
  /** Suggested file name for the real asset, shown as a hint. */
  fileHint?: string;
  /** Aspect ratio utility class, e.g. "aspect-video", "aspect-[4/3]". */
  ratio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  alt,
  label,
  fileHint,
  ratio = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative w-full ${ratio} overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-3">
          <ImageIcon className="w-6 h-6 text-brand-blue" />
        </div>
        <p className="text-sm font-semibold text-gray-600">{label}</p>
        {fileHint && (
          <p className="mt-1 text-xs text-gray-400 font-mono">/images/{fileHint}</p>
        )}
        <p className="mt-2 text-[11px] text-gray-400 max-w-xs">Photo placement — add real South Florida project photo</p>
      </div>
    </div>
  );
}
