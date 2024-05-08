import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

const loggedInRoutes = ['/cart', '/orders', '/payment'];
const loggedInAsAdminPath = ['admin'];
const loggedOutPath = ['/'];

export default async function AuthMiddleware(
  req: NextRequest,
): Promise<NextResponse> {
  const myCookie = cookies();

  let token: string | null = null;
  if (myCookie.get('token')) {
    token = myCookie.get('token')!.value;
  }

  if (
    !token &&
    loggedInAsAdminPath.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.redirect('http://localhost:3000/explore');
  } else if (
    token &&
    loggedOutPath.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.redirect('http://localhost:3000/');
  }

  if (!token && loggedInRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/explore', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}
