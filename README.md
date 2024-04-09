# Eviden Events

Event management system that allows users to create, list, modify and delete events.
Events will have a date, time, description, and maximum capacity of attendees.
In addition, users must be able to register for specific events with capacity limits and manage waiting lists.

## Functional Requirements

1. ### User Management

   - [x] Users can register and log in.
   - [x] Users can log out.

2. ### Event Management

   - [ ] Users can create events.
   - [ ] Users can list events.
   - [ ] Users can modify events.
   - [ ] Users can delete events.
   - [ ] Registration of users to events and management of waiting lists.
   - [ ] Search and filter events by date, location, and availability.

3. ### User Interface

   - [x] Develop with React using TypeScript.
   - [x] Responsive design adapted to various screen sizes.
   - [x] UX/UI best practices.

4. ### Backend

   - [ ] Implement RESTful API with Node.js and Express, using TypeScript.
   - [ ] Use of JWT for authentication and authorization.
   - [ ] Implementation of microservices for different domains (users, events).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
