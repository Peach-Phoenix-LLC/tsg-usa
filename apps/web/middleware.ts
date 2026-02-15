import { NextRequest, NextResponse } from 'next/server';

const regionMap = {
  us: { currency: 'USD', locale: 'en-US' },
  au: { currency: 'AUD', locale: 'en-AU' }
} as const;

export function middleware(request: NextRequest) {
  const countryHeader = request.headers.get('x-vercel-ip-country')?.toLowerCase();
  const country = countryHeader === 'au' ? 'au' : 'us';
  const response = NextResponse.next();
  const config = regionMap[country];

  response.cookies.set('tsg_region', country, { path: '/', sameSite: 'lax' });
  response.cookies.set('tsg_currency', config.currency, { path: '/', sameSite: 'lax' });
  response.headers.set('x-tsg-locale', config.locale);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
