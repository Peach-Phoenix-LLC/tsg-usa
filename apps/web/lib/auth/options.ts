import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? 'tsgabrielle-dev-secret',
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Admin Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const adminUser = process.env.ADMIN_PORTAL_USER ?? 'tsg3';
        const adminPass = process.env.ADMIN_PORTAL_PASSWORD ?? 'tsg1111';

        if (credentials?.username === adminUser && credentials?.password === adminPass) {
          return { id: 'admin-user', name: 'Store Admin', email: 'admin@tsgabrielle.us' };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin/login'
  }
};
