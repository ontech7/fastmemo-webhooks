![image 1](https://github.com/ontech7/fastmemo-webhooks/assets/3172757/c538f2a8-fcbc-4744-9707-6e373edea424)

## FastMemo Webhooks

Sample project/boilerplate for webhooks of [Fast Memo](https://www.fastmemo.app/) mobile app, using Next.js 14 + Shadcn/ui + Tailwindcss + MongoDB + Socket.IO.

If you found this repo useful, ☕ [buy me a coffee](https://www.buymeacoffee.com/ontech7)

## Next steps

- [ ] Webhooks connection with MongoDB
- [ ] Pagination
- [ ] Search with debounce

## How to configure

- You must have a MongoDB account.
- Setup environment variables as shown in `.env.local.example`.
- Use `ngrok` to start a HTTPS Server, otherwise webhooks will fail (since HTTP is not secure).
- Connect webhooks in your FastMemo app using `https://<ngrok-url>/api/webhooks/{endpointName}`.
- Enjoy.

## FAQs

### Why?

This sample project/boilerplate is to demonstrate how to integrate webhooks with [Fast Memo](https://www.fastmemo.app/) mobile app on a Next.js project.

### How does 'in-real-time' fetching work?

I used Socket.IO library to make client and server connections (using API Routes).

### Can I use this with App Routes?

Sure, but the server must stay in the API Routes under `/pages`. All the other things can be moved to `/app`.

## Special mention

Thank you [@bvaughn](https://github.com/bvaughn) for fixing hydration issues with [react-resizable-panels@2.0.8](https://github.com/bvaughn/react-resizable-panels) on [#297](https://github.com/bvaughn/react-resizable-panels/issues/297)
