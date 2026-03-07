# Free Database & Spreadsheet Setup Guide

This guide explains how to set up a free, production-ready storage system for your inquiries. Both options below are **completely free** for your needs.

---

## 🟢 Option 1: Google Sheets (The "Excel" Route)
*Best for: Users who want to see inquiries in a familiar spreadsheet and connect Power BI directly.*

### 🛠️ What is needed:
1. **A Google Account**.
2. **A Google Cloud Project** (Free).
3. **A Service Account Key** (A small JSON file that gives your website permission to write to the sheet).

### 📝 Step-by-Step Setup:
1. **Create the Sheet**: Create a new Google Sheet and add headers: `Date`, `Name`, `Email`, `Service`, `Message`.
2. **Google Cloud Console**: 
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project.
   - Search for **"Google Sheets API"** and click **Enable**.
3. **Service Account**:
   - Go to **APIs & Services > Credentials**.
   - Click **Create Credentials > Service Account**.
   - Once created, click on the account and go to the **Keys** tab.
   - Click **Add Key > Create New Key > JSON**. This will download a file—**keep it safe!**
4. **Share the Sheet**: Open your Google Sheet and click **Share**. Paste the email address of your Service Account (found in the JSON file) and give it **Editor** access.

---

## 🔵 Option 2: Supabase (The "Real Database" Route)
*Best for: Professional data management, faster performance, and more "technical" portfolio points.*

### 🛠️ What is needed:
1. **A Supabase Account** (Sign in with GitHub).
2. **A Supabase Project** (Free tier).

### 📝 Step-by-Step Setup:
1. **Sign Up**: Go to [Supabase.com](https://supabase.com/) and create a free account.
2. **Create Project**: Click **New Project**, Give it a name and a strong password.
3. **Create Table**:
   - Go to the **Table Editor** (grid icon).
   - Click **New Table**.
   - Name it `inquiries`.
   - Add columns: `name` (text), `email` (text), `service` (text), `message` (text), `created_at` (timestamptz - default to now).
4. **Get API Keys**:
   - Go to **Project Settings > API**.
   - You will need the **Project URL** and the **anon public API Key**.

---

## ❓ Which one should you choose?

- **Choose Google Sheets** if you want to be able to open a spreadsheet on your phone and see your leads instantly without logging into any special dashboard.
- **Choose Supabase** if you want to learn how "real" web apps handle data and want the most reliable/fast solution for a portfolio.

**Which one would you like to start with? I can help you with the code for either!**
