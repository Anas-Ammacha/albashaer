import type { NextConfig } from "next";

// عند النشر على GitHub Pages يُبنى الموقع كملفات ثابتة (مجلد out).
// يُفعَّل ذلك تلقائياً من ملف .github/workflows/deploy.yml عبر المتغير GITHUB_PAGES.
const isPagesExport = process.env.GITHUB_PAGES === "true";
// المسار الأساسي للموقع، مثل "/albashaer" (فارغ عند استخدام نطاق خاص).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // يسمح بفتح خادم التطوير من الجوال على نفس شبكة الواي فاي.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  // هاتان الميزتان تحتاجان خادماً، فتُعطَّلان في البناء الثابت.
  cacheComponents: !isPagesExport,
  partialPrefetching: !isPagesExport,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    // لا يوجد خادم لتحسين الصور في الاستضافة الثابتة.
    unoptimized: isPagesExport,
  },
  ...(isPagesExport && {
    output: "export" as const,
    trailingSlash: true,
    basePath,
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
