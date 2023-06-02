var domains = ['localhost', 'lh3.googleusercontent.com'];
if (process.env.STORAGE_URL) {
  domains.push(process.env.STORAGE_URL.replace(/http:\/\//g, '').replace(/https:\/\//g, '').split(':')[0])
}
module.exports = {
  images: {
    domains,
  },
  env: {
    URL: process.env.URL
  }
}