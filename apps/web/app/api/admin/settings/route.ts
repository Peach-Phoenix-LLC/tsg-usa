import { NextResponse } from 'next/server';
import { defaultAdminSettings, type AdminSettings } from '@/lib/admin/types';

let settings: AdminSettings = { ...defaultAdminSettings };

export async function GET() {
  return NextResponse.json({ settings });
}

export async function PUT(request: Request) {
  const body = await request.json().catch(() => ({}));
  settings = { ...settings, ...(body as Partial<AdminSettings>) };
  return NextResponse.json({ settings, savedAt: new Date().toISOString() });
}
