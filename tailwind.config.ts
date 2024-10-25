import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            h1: { color: 'inherit', marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '2.5rem', lineHeight: '1.3' },
            h2: { color: 'inherit', marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '2rem', lineHeight: '1.4' },
            h3: { color: 'inherit', marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '1.75rem', lineHeight: '1.4' },
            h4: { color: 'inherit', marginTop: '0.75rem', marginBottom: '0.75rem', fontSize: '1.5rem', lineHeight: '1.4' },
            p: { color: 'inherit', marginBottom: '0.25rem', lineHeight: '1.8' },
            ul: {
              paddingLeft: '0.25rem',
              marginBottom: '0.25rem',
              '> li': { color: 'inherit', marginBottom: '0.25rem' },
            },
            strong: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            p: { color: 'inherit' },
            ul: {
              '> li': { color: 'inherit' },
            },
            strong: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
