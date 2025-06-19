"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const headerOffset = 48; // header height + some padding
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 rounded-b-lg shadow h-14 border-b border-gray-200 transition-all">
      <div className="container mx-auto px-2 h-full">
        <div className="flex items-center justify-between h-full">
          <button
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center group focus:outline-none"
            aria-label="Ir para o início"
          >
            <div className="w-10 h-10 relative transition-transform group-hover:scale-105">
              <Image
                src="/imgs/LogoEqB.png"
                alt="Equilibria Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <span className="ml-2 text-2xl font-semibold text-gray-800 transition-colors select-none font-semibold font-serif">
              Equilibria
            </span>
          </button>

          <nav className="flex items-center space-x-6 mr-4">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-sm font-medium px-2 py-1 rounded transition-colors hover:bg-equilibriaGreen2 hover:text-white "
            >
              Home
            </a>
            <a
              href="#sobre"
              onClick={(e) => scrollToSection(e, "sobre")}
              className="text-sm font-medium px-2 py-1 rounded transition-colors hover:bg-equilibriaGreen2 hover:text-white "
            >
              Sobre
            </a>
            <a
              href="#profissionais"
              onClick={(e) => scrollToSection(e, "profissionais")}
              className="text-sm font-medium px-2 py-1 rounded  transition-colors hover:bg-equilibriaGreen2 hover:text-white "
            >
              Profissionais
            </a>
            <a
              href="#duvidas"
              onClick={(e) => scrollToSection(e, "duvidas")}
              className="text-sm font-medium px-2 py-1 rounded  transition-colors hover:bg-equilibriaGreen2 hover:text-white "
            >
              Dúvidas Frequentes
            </a>
            <a
              href="#redes"
              onClick={(e) => scrollToSection(e, "redes")}
              className="text-sm font-medium px-2 py-1 rounded  transition-colors hover:bg-equilibriaGreen2 hover:text-white "
            >
              Redes sociais
            </a>
            <a
              href="#contato"
              className="text-sm font-medium px-2 py-1 rounded  transition-colors hover:bg-equilibriaGreen2 hover:text-white "
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

