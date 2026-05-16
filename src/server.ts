import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

/**
 * Netlify specific request handler for Server-Side Rendering (SSR).
 * The Netlify Angular Runtime plugin looks specifically for this exported function.
 */
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  /**
   * Example API endpoints can be defined here.
   * Uncomment and define endpoints as necessary.
   * 
   * const pathname = new URL(request.url).pathname;
   * if (pathname === '/api/hello') {
   *   return Response.json({ message: 'Hello from the API' });
   * }
   */

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * The core request handler used by the Angular CLI during local development 
 * (dev-server) and during the local build process.
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);