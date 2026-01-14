import { Link } from "@/app/components/Navigation";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="no-underline">
        <h1 className="text-3xl font-normal tracking-wide text-white" style={{ fontFamily: "'Caveat', cursive" }}>
          freedom tunnel labs
        </h1>
      </Link>
      
      <nav className="flex items-center gap-12">
        <Link 
          href="/board" 
          className={`text-white no-underline ${currentPage === 'board' ? 'opacity-100' : 'opacity-70 hover:opacity-100'} transition-opacity`}
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          do stuff
        </Link>
        <Link 
          href="/ai-chat" 
          className={`text-white no-underline ${currentPage === 'ai-chat' ? 'opacity-100' : 'opacity-70 hover:opacity-100'} transition-opacity`}
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          ai chat
        </Link>
        <Link 
          href="/discord" 
          className={`text-white no-underline ${currentPage === 'discord' ? 'opacity-100' : 'opacity-70 hover:opacity-100'} transition-opacity`}
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          discord
        </Link>
        <Link 
          href="/"
          className="px-6 py-2 border border-white text-white rounded-full no-underline hover:bg-white hover:text-black transition-colors"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          join for free
        </Link>
      </nav>
    </header>
  );
}
