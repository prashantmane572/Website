# Technology Stack & Architecture - Prashant Mane BI Portfolio

This document provides a detailed overview of the technical architecture, why specific tools were chosen, and how the data layer is evolving.

## 🚀 Core Application Stack

### [Next.js 15 (App Router)](https://nextjs.org/)
- **How it's used**: 
  - **Routing**: Manages all navigation (Home, Blogs, Projects, Admin).
  - **API Routes**: Powers the `src/app/api/inquiries/route.ts` endpoint which handles form submissions.
  - **Server Components**: Optimizes performance by pre-rendering data-heavy sections on the server.

### [TypeScript](https://www.typescriptlang.org/)
- **How it's used**: Defines interfaces for `Project`, `Blog`, and `Inquiry` objects. This prevents "undefined" errors and makes the code much easier to maintain as it grows.

---

## 🎨 Design & Interaction

### [Tailwind CSS v4](https://tailwindcss.com/)
- **How it's used**: 
  - Implements the **Glassmorphism** design system (translucent backgrounds with blur).
  - Handles the custom color palette (Dark Navy, Electric Blue).
  - Uses `@theme` variables for consistent spacing and branding.

### [Framer Motion](https://www.framer.com/motion/)
- **How it's used**: 
  - **KPI Counters**: Animates the numbers in the Hero section from zero to their actual value.
  - **Entrance Animations**: Causes sections to slide/fade in elegantly as the user scrolls.

---

## 💾 Database Architecture

### Current Implementation: Local JSON
- **Location**: `src/lib/inquiries.json`
- **Mechanism**: The API uses the `fs` (FileSystem) module to read and write to this file.
- **Why it failed in production**: Serverless environments (like Vercel) have a **Read-Only File System** (`EROFS`). You cannot write files to the disk while the site is running. This is why you saw the error: `Failed to send inquiry: EROFS`.

### How a Database is Used
1. **Inquiry Flow**: User fills form -> Next.js API receives data -> API sends data to Database -> Database stores it permanently.
2. **Admin View**: Admin logs in -> Admin page fetches data from Database -> Page displays the list of inquiries.

### Other Database Options & Alternatives

| Option | Pros | Cons | Best For |
| :--- | :--- | :--- | :--- |
| **Google Sheets / Excel** | Very familiar for BI users, free, easy to visualize data instantly. | Scaling issues, API latency, complex authentication setup. | Users who want to see inquiries in a spreadsheet. |

---

## 📊 Spreadsheet as a Database (The "Excel" Route)

Since you specialize in BI, using a spreadsheet as your database is a **very possible** and popular choice. 

### How it's used:
1. **Google Sheets API**: This is the most robust method. We would use a "Service Account" to allow your Next.js app to append rows directly into a specific Google Sheet.
2. **Third-Party Bridges (Sheety.co / Stein)**: These services turn a Google Sheet or Excel file into a REST API instantly. They are the fastest way to get started.

### Why this is a great fit for you:
- **Live BI Connection**: You could connect your **Power BI Desktop** directly to that same spreadsheet to build a live dashboard of your own inquiry leads.
- **Manual Control**: You can easily edit, categorize, or delete inquiries manually just like you normally do in Excel.

### Transition Plan:
If you want to go this route, we would replace the `inquiries.json` logic with a request to a **Google Sheets API wrapper**.

---

## 🛠️ Deployment & Hosting

### [Vercel](https://vercel.com/)
- **Role**: The host for the website and API.
- **Limitation**: As discovered, it requires a remote database because the local file system is locked for security and scalability.

### [GitHub](https://github.com/)
- **Role**: Source control and deployment trigger. Every time we "push" code, Vercel automatically builds the latest version of the site.

---

## 📖 Setup Guides

- [**Database Setup Guide**](file:///c:/Users/diyar/OneDrive/Desktop/SOMETHING/website/DATABASE_SETUP_GUIDE.md): Step-by-step instructions for Google Sheets and Supabase.
