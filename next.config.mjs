/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false, // FIXME: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
    },
};

export default nextConfig;
