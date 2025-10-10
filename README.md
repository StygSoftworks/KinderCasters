# KinderCasters

Magical Learning for Little Learners - An interactive flashcard application for toddlers and preschoolers ages 2-5.

## Features

- 78 interactive flashcards teaching ABCs and 123s
- Three themed categories: Magical Creatures, Magic Words, and Heroes & Villains
- Audio pronunciation using Web Speech API
- Flip cards to reveal rhymes, definitions, and educational content
- Print-friendly for offline learning activities
- Fully responsive design
- No data collection or tracking

## Local Installation

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation Steps

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd kindercasters
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

   The built files will be in the `dist` folder.

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Technology Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide React (icons)

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── FeatureCard.tsx
│   ├── FlashcardItem.tsx
│   ├── InfoSection.tsx
│   ├── Navigation.tsx
│   ├── PageHeader.tsx
│   └── PortalCard.tsx
├── data/              # Flashcard data
│   └── flashcards.ts
├── pages/             # Page components
│   ├── About.tsx
│   ├── Flashcards.tsx
│   ├── HomePage.tsx
│   ├── NotFound.tsx
│   └── Portal.tsx
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Web Speech API (for pronunciation feature)

## License

This project is for educational purposes.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.
