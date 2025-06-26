// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#313038] border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Espaço Acolher Logo"
                width={70}
                height={55}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-gray-700/50 px-3 py-2 rounded-md text-sm font-medium">
                Início
              </Link>
              <Link href="/sobre" className="text-white hover:bg-gray-700/50 px-3 py-2 rounded-md text-sm font-medium">
                Sobre o Projeto
              </Link>
              <Link href="/privacidade" className="text-white hover:bg-gray-700/50 px-3 py-2 rounded-md text-sm font-medium">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}