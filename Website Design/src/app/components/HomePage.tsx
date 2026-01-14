import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      {/* Quote Section */}
      <div className="text-center mb-24">
        <p className="text-white text-lg mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
          we are creating a future where we each feel our own power
        </p>
        <p className="text-white/60" style={{ fontFamily: "'Courier New', monospace" }}>
          - adrienne maree brown.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-16 items-start">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-white text-2xl mb-8" style={{ fontFamily: "'Courier New', monospace" }}>
            freedom tunnel labs is:
          </h2>

          <div className="space-y-6 text-white/90" style={{ fontFamily: "'Courier New', monospace" }}>
            <p className="text-sm leading-relaxed">
              a place for people who are trying to figure out what real leadership looks like
            </p>

            <p className="text-sm leading-relaxed">
              a new school where we unlearn what isn't serving us
            </p>

            <p className="text-sm leading-relaxed">
              where we use systems thinking to understand the world and make change that matters
            </p>

            <p className="text-sm leading-relaxed">
              where we use AI in ways that benefit us and our communities
            </p>

            <p className="text-sm leading-relaxed">
              a place where we figure things out together by doing, experimenting, and trying things out — not just talking about them
            </p>

            <p className="text-white/60 text-xs mt-8">
              - niteesh elias & brooke shaffner
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1545880323-a8ca3a6deaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5uZWwlMjBncmFmZml0aSUyMHVyYmFufGVufDF8fHx8MTc2ODI2NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tunnel with graffiti"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-24">
        <p className="text-white text-center mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
          watch video to learn more
        </p>
        <div className="bg-gray-200 w-full aspect-video rounded-lg flex items-center justify-center">
          <p className="text-gray-500" style={{ fontFamily: "'Courier New', monospace" }}>
            Video Player
          </p>
        </div>
      </div>
    </div>
  );
}
