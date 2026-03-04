# Vercel KV (Upstash Redis) Setup Guide

## ✅ Code is Ready!

The view counter is now configured to use Vercel KV (Upstash Redis) for permanent storage.

## 🚀 Quick Setup (2 minutes)

### Step 1: Create Upstash Redis Database on Vercel

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your portfolio project
3. Click on **"Storage"** tab in the top navigation
4. Click **"Create Database"**
5. Select **"KV"** (Redis)
6. Choose a name (e.g., "portfolio-views")
7. Select region closest to you (e.g., US East)
8. Click **"Create"**

### Step 2: Connect to Your Project

1. After creating, click **"Connect Project"**
2. Select your portfolio project
3. Click **"Connect"**
4. Vercel will automatically add environment variables to your project

### Step 3: Redeploy (Automatic)

Vercel will automatically redeploy your project with the new environment variables.

That's it! ✅

## 🎯 What Happens Now

- ✅ Views are stored permanently in Redis
- ✅ Survives server restarts and redeployments
- ✅ Fast Redis-based storage
- ✅ Free tier: 10,000 commands/day (more than enough)
- ✅ Automatic backups

## 📊 Initial View Count

The counter will start at **1,247** (or current count if already running).

To set a custom starting number:
1. Go to Vercel Dashboard → Storage → Your KV Database
2. Click "Data Browser"
3. Add key: `portfolio-views`
4. Set value: `5000` (or any number you want)

## 🔧 Environment Variables (Auto-Added)

Vercel automatically adds these when you connect:
```
KV_REST_API_URL=https://...
KV_REST_API_TOKEN=...
KV_REST_API_READ_ONLY_TOKEN=...
KV_URL=redis://...
```

## 🧪 Testing Locally

To test locally, copy the environment variables:

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Copy all KV variables
3. Create `.env.local` file in your project:

```bash
KV_REST_API_URL=your-url
KV_REST_API_TOKEN=your-token
KV_REST_API_READ_ONLY_TOKEN=your-read-token
KV_URL=your-redis-url
```

4. Run `npm run dev`

## 📈 Monitoring

View your database stats:
- Vercel Dashboard → Storage → Your KV Database
- See total commands, storage used, etc.

## 💰 Pricing

**Free Tier:**
- 10,000 commands/day
- 256 MB storage
- Perfect for portfolio view tracking

**Paid Tier** (if you exceed):
- $0.20 per 100,000 commands
- You'll never hit this with a portfolio!

## ✅ Verification

After setup, visit your portfolio and refresh a few times. The view count should:
1. Increment with each visit
2. Persist after page refresh
3. Survive redeployments

## 🆘 Troubleshooting

**Views not incrementing?**
- Check Vercel Dashboard → Storage → Make sure database is connected
- Check deployment logs for errors
- Verify environment variables are set

**Still showing 1,247?**
- The fallback is working (KV not connected yet)
- Complete the setup steps above
- Redeploy your project

## 🎉 Done!

Your view counter now has permanent storage and will never reset!
