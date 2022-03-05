/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH0_SECRET: "vDB3+/U6%\Gh9P_TxCt=KnCQ>`=Mmf?(",
    AUTH0_BASE_URL: "https://localhost:3000",
    AUTH0_ISSUER_BASE_URL: "dev-e5pv8qrt.us.auth0.com",
    AUTH0_CLIENT_ID: "6nW97SjfCp6k1xuqgkaZCDFyOc26fxsz",
    AUTH0_CLIENT_SECRET: "uVgNVJ7B_0KvP6XlCIpOsz3cd8z7kyojA-gUU9Zeq6eI2tdNScZVlKyuEHNDmYrQ"
  }
}

module.exports = nextConfig
