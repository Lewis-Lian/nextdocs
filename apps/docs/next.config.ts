import createBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Check if we're building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Set basePath and assetPrefix for GitHub Pages only
  ...(isGithubPages && repoName && repoName !== `${process.env.GITHUB_REPOSITORY?.split('/')[0]}.github.io` && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
  }),
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    // Replaced by root workspace command
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: [
    'ts-morph',
    'typescript',
    'oxc-transform',
    'twoslash',
    'shiki',
    '@takumi-rs/core',
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
    ],
  },
  // Rewrites and redirects are not supported in static export mode
  // async rewrites() {
  //   return [
  //     {
  //       source: '/docs/:path*.mdx',
  //       destination: '/llms.mdx/:path*',
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/docs/ui/blocks/layout',
  //       destination: '/docs/ui/layouts/docs',
  //       permanent: true,
  //     },
  //     {
  //       source: '/docs/ui/blocks/:path*',
  //       destination: '/docs/ui/layouts/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

const withMDX = createMDX();

export default withAnalyzer(withMDX(config));
