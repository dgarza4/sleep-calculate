# Sleep score calculator

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/calculate](http://localhost:3000/api/calculate). This endpoint can be edited in `pages/api/calculate.ts`. This endpoint accepts two query parameters, `durationInBed` and `durationAsleep`. Here's an example: [http://localhost:3000/api/calculate?durationInBed=8&durationAsleep=1.5](http://localhost:3000/api/calculate?durationInBed=8&durationAsleep=1.5), then the response will be like below based on this formula `(100 * durationAsleep/durationInBed)`:
```
{ "result": 18.75 }
```

To run the tests:
```bash
npm run test
# or
yarn test
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
