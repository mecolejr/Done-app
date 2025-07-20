# Quick Start Guide 🚀

Get your Done! ⚡ app running in under 2 minutes!

## Prerequisites
- Node.js 18+ installed on your system
- Git (optional, for version control)

## Installation

### Option 1: Automatic Setup (Recommended)
```bash
# Make the install script executable and run it
chmod +x install.sh
./install.sh
```

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Running the App

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Start organizing!** ⚡

## Quick Tips

### Adding Your First Task
1. Tap the floating "+" button
2. Type your task
3. Set priority (optional)
4. Add due date (optional)
5. Tap "Add Task"

### Essential Gestures
- **Swipe left** on a task to delete it
- **Swipe right** on a task to mark it complete
- **Long press** and drag to reorder tasks
- **Tap the checkbox** for quick completion

### Navigation
- Use the bottom tabs to switch between different life areas
- Each tab has its own task list
- Tap the chart icon in the header to view statistics

## Troubleshooting

### "Module not found" errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Clear TypeScript cache
rm -rf .next
npm run dev
```

## Next Steps

- Check out the [full README](./README.md) for detailed documentation
- Customize the colors in `tailwind.config.js`
- Add your own tabs in `app/page.tsx`
- Deploy to Vercel for sharing with others

---

**Need help?** Check the [README](./README.md) for comprehensive documentation. 