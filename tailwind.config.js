import crypto from 'crypto';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

// Only apply obfuscation in production
if (process.env.NODE_ENV === 'production') {
  // Function to generate a deterministic hash for class names
  const hashClassName = className => {
    const hash = crypto.createHash('md5').update(className).digest('hex').substring(0, 8);
    return `_${hash}`;
  };

  // Create a mapping of original class names to hashed ones
  const classNameMap = {};

  // Add class name obfuscation
  config.prefix = '';
  config.classNameTransformer = className => {
    // Skip obfuscation for special classes or those already processed
    if (className.startsWith('_') || className.includes('[')) {
      return className;
    }

    // If we've already hashed this class, return the cached version
    if (classNameMap[className]) {
      return classNameMap[className];
    }

    // Hash the class name and cache it
    const hashedName = hashClassName(className);
    classNameMap[className] = hashedName;
    return hashedName;
  };
}

export default config;
