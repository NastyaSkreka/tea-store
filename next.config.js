/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    }, 
    images: { domains: ['twinings.co.uk' , 'i.pinimg.com', 'd2jx2rerrg6sh3.cloudfront.net', 'www.davidstea.com', 'res.cloudinary.com'] 
    }
};

module.exports = nextConfig;