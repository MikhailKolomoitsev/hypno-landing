import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except for
    // - files with an extension (e.g. favicon.ico, bg-desktop.jpg)
    // - Next.js internals (_next)
    // - API routes
    "/((?!_next|api|.*\\..*).*)",
  ],
};
