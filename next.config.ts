import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default withPayload(nextConfig) 
