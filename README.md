# Open Design Guide

This is where the code for the [Open Design Guide](https://opendesign.guide/) resides. You are welcome to chip in. If you're not sure how to contribute to open-source projects yet, best to browse the guide - that's what it's for.

Generally, all content improvements are welcome. If you have a suggestion, go to the issues tab and create a new one and describe what you have in mind. We can discuss there in the comments and figure out how to move forward.

The site has privacy-preserving tracking via custom [Umami](https://umami.is/) installation. You can [view the stats here](https://info.bitcoin.design/share/I2uVniojQ5gdd2tp/opendesign.guide).

## Running the site locally

The guide uses the Nuxt framework. Good to have installed:
- Node
- NVM (to manage Node versions)
- NPM (to install needed code libraries)

Switch to the recommended node version
```bash
nvm use
```

Install dependencies
```bash
npm install
```

Run the project
```bash
npm run dev
```

If all works correctly, you can then access the site at:
http://localhost:3005/

## Deployment

The site is built and deployed with Netlify.