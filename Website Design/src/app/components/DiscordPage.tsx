export function DiscordPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <h2 className="text-white text-2xl mb-8" style={{ fontFamily: "'Courier New', monospace" }}>
        discord
      </h2>
      <p className="text-white/60 mb-4" style={{ fontFamily: "'Courier New', monospace" }}>
        Join our community to connect with other leaders and learners.
      </p>
      <button 
        className="px-6 py-3 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        Join Discord Server
      </button>
    </div>
  );
}
