import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth/options';
import { AdminPortalClient } from '@/components/admin/AdminPortalClient';

export default async function AdminPortalPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/admin/login');
  }

  return <AdminPortalClient adminName={session.user?.name ?? 'Admin'} />;
}
