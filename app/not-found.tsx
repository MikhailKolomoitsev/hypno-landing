import Link from 'next/link';

/** Root-level 404 (outside any locale). The middleware normally redirects to /uk first. */
export default function RootNotFound() {
  return (
    <div className="min-h-screen bg-[#080810] text-white flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-xs font-semibold tracking-widest text-green-400 uppercase mb-3">404</p>
        <h1 className="text-3xl font-bold mb-6">Page not found</h1>
        <Link href="/uk" className="text-green-400 hover:text-green-300 text-sm font-medium">kolomoitsev.com →</Link>
      </div>
    </div>
  );
}
