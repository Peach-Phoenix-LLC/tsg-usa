'use client';

import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await signIn('credentials', {
      username,
      password,
      redirect: true,
      callbackUrl: '/admin/portal'
    });

    if (response?.error) {
      setError('Invalid credentials');
    }
  }

  return (
    <div className="min-h-screen bg-onyx px-6 py-16 text-white">
      <div className="mx-auto max-w-md rounded-2xl border border-white/15 bg-slate p-8 shadow-glass">
        <h1 className="font-serif text-3xl">Admin Portal Login</h1>
        <p className="mt-2 text-sm text-white/70">Secure access for inventory, orders, analytics, and AI tooling.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs uppercase tracking-[0.18em]">Username</label>
            <input className="mt-2" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.18em]">Password</label>
            <input className="mt-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full rounded-full border border-white/40 py-3 uppercase tracking-[0.18em] hover:bg-white hover:text-onyx">
            Sign In
          </button>
          {error && <p className="text-sm text-red-300">{error}</p>}
        </form>
      </div>
    </div>
  );
}
