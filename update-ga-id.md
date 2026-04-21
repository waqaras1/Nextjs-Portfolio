# 🔧 How to Update Google Analytics ID

## **Step 1: Get Your Measurement ID**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Create account: "Waqar Ahmed Portfolio"
4. Create property: "waqaras.dev"
5. Create web stream: `https://waqaras.dev`
6. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)

## **Step 2: Update Your Code**

### **Find these lines in `app/layout.tsx`:**

```tsx
{/* Google Analytics */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: 'Waqar Ahmed - MERN Stack Developer',
        page_location: 'https://waqaras.dev'
      });
    `,
  }}
/>
```

### **Replace `GA_MEASUREMENT_ID` with your real ID:**

```tsx
{/* Google Analytics */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX', {
        page_title: 'Waqar Ahmed - MERN Stack Developer',
        page_location: 'https://waqaras.dev'
      });
    `,
  }}
/>
```

## **Step 3: Test Your Setup**

1. Deploy your website
2. Visit your website
3. Go back to Google Analytics
4. Check "Real-time" reports to see if your visit is tracked

## **Step 4: Verify Installation**

1. In Google Analytics, go to "Admin" → "Data Streams"
2. Click on your web stream
3. Click "Tagging Instructions"
4. Use the "Google tag" verification method
5. Follow the instructions to verify your setup

## **Common Issues:**

- **No data showing**: Wait 24-48 hours for data to appear
- **Real-time not working**: Check if your ad blocker is blocking Google Analytics
- **Wrong domain**: Make sure you're using `https://waqaras.dev` (not localhost)

## **Next Steps:**

After setting up Google Analytics:
1. Set up Google Search Console
2. Create your favicon and icons
3. Submit your sitemap

Need help with any of these steps? Let me know! 