/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "img.freepik.com",
                pathname: "/free-vector/**", 
              },
        ]
    }
};

export default nextConfig;

