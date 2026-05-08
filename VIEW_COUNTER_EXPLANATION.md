# View Counter - How It Works

## Current Implementation (In-Memory)

The view counter currently uses **in-memory storage** which means:

### How it works:
1. When someone visits your portfolio, the `ViewCounter` component calls `/api/views` (POST)
2. The API increments a counter variable in memory
3. The counter starts at 1,247 (you can change this in `app/api/views/route.ts`)
4. Each page load adds +1 to the count
5. The number is displayed in real-time

### Limitations:
- ❌ **Resets on server restart** - When Vercel redeploys or the server restarts, count goes back to 1,247
- ❌ **Not persistent** - Data is lost between deployments
- ✅ **Fast and simple** - No database needed
- ✅ **Works immediately** - No setup required

## Upgrade Options for Real Persistence:

### Option 1: Vercel KV (Redis) - Recommended ⭐
**Best for production, free tier available**

```bash
# Install
npm install @vercel/kv

# Update app/api/views/route.ts
import { kv } from '@vercel/kv';

export async function POST() {
  const views = await kv.incr('portfolio-views');
  return NextResponse.json({ views });
}

export async function GET() {
  const views = await kv.get('portfolio-views') || 0;
  return NextResponse.json({ views });
}
```

Setup:
1. Go to Vercel Dashboard → Storage → Create KV Database
2. Connect to your project
3. Views will persist forever!

### Option 2: Database (PostgreSQL/MongoDB)
**For more complex analytics**

You can store views with timestamps, user info, etc.

### Option 3: Google Analytics API
**Use real GA data**

Fetch actual view count from Google Analytics.

## Current Starting Number

The counter starts at **1,247** which you can change in:
`app/api/views/route.ts` → Line 4: `let viewCount = 1247;`

You can set it to:
- `0` - Start from zero
- `5000` - Start from 5,000 (looks more established)
- Any number you want!

## Recommendation

For production, I recommend **Vercel KV** because:
- ✅ Free tier (10,000 commands/day)
- ✅ Instant setup (2 minutes)
- ✅ Data persists forever
- ✅ Fast Redis-based storage
- ✅ No database management needed

Would you like me to implement Vercel KV for real persistence?
