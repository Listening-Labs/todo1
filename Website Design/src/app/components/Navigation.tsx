import { createContext, useContext, useState, ReactNode } from "react";

type NavigationContextType = {
  currentPage: string;
  navigate: (page: string) => void;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState("/");

  const navigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Link({ href, children, className, style }: LinkProps) {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
