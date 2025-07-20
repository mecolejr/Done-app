// Demo data for Soulful To-Do App
// You can use this to populate your app with sample tasks

export const demoData = {
  work: [
    {
      id: 'work-1',
      text: 'Review quarterly reports',
      completed: false,
      priority: 'high',
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      notes: 'Focus on Q3 performance metrics',
      tags: ['reports', 'quarterly']
    },
    {
      id: 'work-2',
      text: 'Schedule team meeting',
      completed: true,
      priority: 'medium',
      dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Discuss project timeline',
      tags: ['meeting', 'team']
    },
    {
      id: 'work-3',
      text: 'Update project documentation',
      completed: false,
      priority: 'low',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Include new API endpoints',
      tags: ['documentation', 'api']
    }
  ],
  personal: [
    {
      id: 'personal-1',
      text: 'Call mom',
      completed: false,
      priority: 'high',
      dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // tomorrow
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Check on her health',
      tags: ['family', 'health']
    },
    {
      id: 'personal-2',
      text: 'Read 30 minutes',
      completed: true,
      priority: 'medium',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Current book: The Power of Now',
      tags: ['reading', 'self-improvement']
    }
  ],
  groceries: [
    {
      id: 'groceries-1',
      text: 'Buy organic vegetables',
      completed: false,
      priority: 'medium',
      dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Spinach, kale, carrots, tomatoes',
      tags: ['organic', 'vegetables']
    },
    {
      id: 'groceries-2',
      text: 'Get laundry detergent',
      completed: false,
      priority: 'low',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      notes: 'Eco-friendly brand',
      tags: ['household', 'cleaning']
    }
  ],
  finance: [
    {
      id: 'finance-1',
      text: 'Pay credit card bill',
      completed: false,
      priority: 'high',
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Due on 15th, $1,200',
      tags: ['bills', 'credit-card']
    },
    {
      id: 'finance-2',
      text: 'Review investment portfolio',
      completed: false,
      priority: 'medium',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      notes: 'Check 401k allocation',
      tags: ['investments', 'retirement']
    }
  ],
  health: [
    {
      id: 'health-1',
      text: 'Go for a run',
      completed: true,
      priority: 'medium',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: '30 minutes, moderate pace',
      tags: ['exercise', 'cardio']
    },
    {
      id: 'health-2',
      text: 'Drink 8 glasses of water',
      completed: false,
      priority: 'medium',
      createdAt: new Date(Date.now()),
      notes: 'Track throughout the day',
      tags: ['hydration', 'daily']
    }
  ],
  learning: [
    {
      id: 'learning-1',
      text: 'Complete React course module',
      completed: false,
      priority: 'high',
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      notes: 'Advanced hooks and context',
      tags: ['react', 'programming']
    },
    {
      id: 'learning-2',
      text: 'Practice Spanish',
      completed: false,
      priority: 'low',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      notes: 'Duolingo lesson',
      tags: ['language', 'spanish']
    }
  ],
  someday: [
    {
      id: 'someday-1',
      text: 'Learn to play guitar',
      completed: false,
      priority: 'low',
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      notes: 'Start with basic chords',
      tags: ['music', 'hobby']
    },
    {
      id: 'someday-2',
      text: 'Visit Japan',
      completed: false,
      priority: 'low',
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      notes: 'Save $5,000 for trip',
      tags: ['travel', 'bucket-list']
    },
    {
      id: 'someday-3',
      text: 'Write a book',
      completed: false,
      priority: 'low',
      createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
      notes: 'Science fiction novel idea',
      tags: ['writing', 'creative']
    }
  ]
}

// Function to load demo data into localStorage
export function loadDemoData() {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem('soulful-todo-data', JSON.stringify(demoData))
    console.log('Demo data loaded successfully!')
    return true
  } catch (error) {
    console.error('Failed to load demo data:', error)
    return false
  }
}

// Function to clear all data
export function clearAllData() {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.removeItem('soulful-todo-data')
    console.log('All data cleared!')
    return true
  } catch (error) {
    console.error('Failed to clear data:', error)
    return false
  }
}

// Usage instructions
console.log(`
🌿 Soulful To-Do Demo Data

To load demo data, run in browser console:
  import('./demo-data.js').then(m => m.loadDemoData())

To clear all data:
  import('./demo-data.js').then(m => m.clearAllData())

Or add these functions to your app for easy testing!
`) 