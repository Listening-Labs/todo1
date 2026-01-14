import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

type Category = "self" | "people" | "ecosystem";

type Resource = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: Category;
};

const resources: Resource[] = [
  {
    id: "1",
    title: "what's my leadership narrative?",
    description: "understand who you are as a person and what is the journey you are on. what is the narrative that you are showing to the world?",
    image: "https://images.unsplash.com/photo-1766791789619-5e76bb81b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwcGFpbnRpbmclMjBiaXJkfGVufDF8fHx8MTc2ODI2NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "self",
  },
  {
    id: "2",
    title: "listening to your body weather",
    description: "the metaphor begins in the body. leaders pay attention to where we feel pleasure, pain, better and make decisions from it. we make space.",
    image: "https://images.unsplash.com/photo-1663658737062-480e3cb24a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBzdW5yaXNlJTIwbmF0dXJlfGVufDF8fHx8MTc2ODI2NTU4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "self",
  },
  {
    id: "3",
    title: "power audit (decolonized leadership)",
    description: "liberatory leadership requires us to understand power. power lives in three bodies: in your own body, in relationships, and in the collective.",
    image: "https://images.unsplash.com/photo-1742869511050-73934938f57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZpcmUlMjBmbGFtZXN8ZW58MXx8fHwxNzY4MjY1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "self",
  },
  {
    id: "4",
    title: "what's my leadership narrative?",
    description: "understand who you are as a person and what is the journey you are on. what is the narrative that you are showing to the world?",
    image: "https://images.unsplash.com/photo-1766791789619-5e76bb81b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwcGFpbnRpbmclMjBiaXJkfGVufDF8fHx8MTc2ODI2NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "people",
  },
  {
    id: "5",
    title: "listening to your body weather",
    description: "the metaphor begins in the body. leaders pay attention to where we feel pleasure, pain, better and make decisions from it. we make space.",
    image: "https://images.unsplash.com/photo-1663658737062-480e3cb24a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBzdW5yaXNlJTIwbmF0dXJlfGVufDF8fHx8MTc2ODI2NTU4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "people",
  },
  {
    id: "6",
    title: "power audit (decolonized leadership)",
    description: "liberatory leadership requires us to understand power. power lives in three bodies: in your own body, in relationships, and in the collective.",
    image: "https://images.unsplash.com/photo-1742869511050-73934938f57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZpcmUlMjBmbGFtZXN8ZW58MXx8fHwxNzY4MjY1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "people",
  },
  {
    id: "7",
    title: "what's my leadership narrative?",
    description: "understand who you are as a person and what is the journey you are on. what is the narrative that you are showing to the world?",
    image: "https://images.unsplash.com/photo-1766791789619-5e76bb81b87d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsJTIwcGFpbnRpbmclMjBiaXJkfGVufDF8fHx8MTc2ODI2NTU4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "ecosystem",
  },
  {
    id: "8",
    title: "listening to your body weather",
    description: "the metaphor begins in the body. leaders pay attention to where we feel pleasure, pain, better and make decisions from it. we make space.",
    image: "https://images.unsplash.com/photo-1663658737062-480e3cb24a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBzdW5yaXNlJTIwbmF0dXJlfGVufDF8fHx8MTc2ODI2NTU4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "ecosystem",
  },
  {
    id: "9",
    title: "power audit (decolonized leadership)",
    description: "liberatory leadership requires us to understand power. power lives in three bodies: in your own body, in relationships, and in the collective.",
    image: "https://images.unsplash.com/photo-1742869511050-73934938f57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZpcmUlMjBmbGFtZXN8ZW58MXx8fHwxNzY4MjY1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "ecosystem",
  },
];

export function Library() {
  const [activeCategory, setActiveCategory] = useState<Category>("self");

  const filteredResources = resources.filter((r) => r.category === activeCategory);

  return (
    <div className="mt-12 border border-white/20 p-6">
      <h2 className="text-white text-xl mb-6" style={{ fontFamily: "'Courier New', monospace" }}>
        library
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveCategory("self")}
          className={`px-6 py-2 transition-colors ${
            activeCategory === "self" ? "bg-white/20 text-white" : "bg-black text-white/60 hover:text-white"
          }`}
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          understanding the self
        </button>
        <button
          onClick={() => setActiveCategory("people")}
          className={`px-6 py-2 transition-colors ${
            activeCategory === "people" ? "bg-white/20 text-white" : "bg-black text-white/60 hover:text-white"
          }`}
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          understanding the people around us
        </button>
        <button
          onClick={() => setActiveCategory("ecosystem")}
          className={`px-6 py-2 transition-colors ${
            activeCategory === "ecosystem" ? "bg-white/20 text-white" : "bg-black text-white/60 hover:text-white"
          }`}
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          understanding the ecosystem we operate in
        </button>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-3 gap-4">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-black border border-white/20 overflow-hidden">
            <ImageWithFallback
              src={resource.image}
              alt={resource.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-white text-sm mb-2" style={{ fontFamily: "'Courier New', monospace" }}>
                {resource.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
                {resource.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
