import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/events/:id", "/api/webhook(.*)"],
  ignoredRoutes: [
    "/api/uploadthing(.*)",
    "/api/webhook(.*)",
    "/assets(.*)",
    "/favicon.ico",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
