import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kelsey Woodland</h1>

        <nav>
          <ul className="flex gap-6 text-lg">
            <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-200">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
