import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (process.env.NODE_ENV === 'development') {
    const accept = request.headers.get('accept') ?? ''
    // Only send Clear-Site-Data on document (HTML) navigations, not on JS/CSS chunks
    if (accept.includes('text/html')) {
      response.headers.set('Clear-Site-Data', '"cache"')
    }
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }

  return response
}

export const config = {
  matcher: [
    // Match all paths except _next internals, api routes, and static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
