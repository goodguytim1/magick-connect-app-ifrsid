
export interface Card {
  id: string;
  deckId: string;
  type: 'question' | 'mission';
  prompt: string;
  tags?: string[];
}

export interface Deck {
  id: string;
  name: string;
  displayName: string;
  description: string;
  cardCount: number;
  icon: string;
  color: string;
}

export const decks: Deck[] = [
  {
    id: 'magickmixer',
    name: 'Magickmixer',
    displayName: 'Magick Mixer',
    description: 'Social & Interactive Icebreaker Deck (21+ Adults Only)',
    cardCount: 20,
    icon: '🍹',
    color: '#FF6B6B',
  },
  {
    id: 'midnightmagick',
    name: 'midnightmagick',
    displayName: 'Midnight Magick',
    description: 'Intimacy, Sensuality & Sex (Adults Only 18+)',
    cardCount: 38,
    icon: '❤️',
    color: '#C92A2A',
  },
  {
    id: 'sparkquestions',
    name: 'sparkquestions',
    displayName: 'Spark Questions',
    description: 'Deep conversation starters',
    cardCount: 25,
    icon: '⚡',
    color: '#FFB627',
  },
  {
    id: 'mirrormoments',
    name: 'mirrormoments',
    displayName: 'Mirror Moments',
    description: 'Self-reflection and vulnerability',
    cardCount: 22,
    icon: '🪞',
    color: '#9D4EDD',
  },
  {
    id: 'playfulsparks',
    name: 'Playfulsparks',
    displayName: 'Playful Sparks',
    description: 'Fun and lighthearted activities',
    cardCount: 30,
    icon: '🎭',
    color: '#FF006E',
  },
  {
    id: 'bondbuilders',
    name: 'Bondbuilders',
    displayName: 'Bond Builders',
    description: 'Strengthen your connection',
    cardCount: 28,
    icon: '🤝',
    color: '#7B2CBF',
  },
  {
    id: 'adventuresparks',
    name: 'Adventuresparks',
    displayName: 'Adventure Sparks',
    description: 'Exciting challenges and quests',
    cardCount: 24,
    icon: '🗺️',
    color: '#4ECDC4',
  },
  {
    id: 'creativecharms',
    name: 'Creativecharms',
    displayName: 'Creative Charms',
    description: 'Artistic and imaginative prompts',
    cardCount: 26,
    icon: '🎨',
    color: '#95E1D3',
  },
  {
    id: 'mirrorquests',
    name: 'Mirrorquests',
    displayName: 'Mirror Quests',
    description: 'Personal growth missions',
    cardCount: 20,
    icon: '🔮',
    color: '#A78BFA',
  },
  {
    id: 'bondquests',
    name: 'bondquests',
    displayName: 'Bond Quests',
    description: 'Relationship-building challenges',
    cardCount: 23,
    icon: '💕',
    color: '#F472B6',
  },
];

export const cards: Card[] = [
  // Magickmixer
  { id: 'mm1', deckId: 'magickmixer', type: 'question', prompt: 'If you could have dinner with anyone, living or dead, who would it be and why?', tags: ['social', 'fun', 'icebreaker'] },
  { id: 'mm2', deckId: 'magickmixer', type: 'question', prompt: 'What&apos;s the most spontaneous thing you&apos;ve ever done?', tags: ['social', 'fun'] },
  { id: 'mm3', deckId: 'magickmixer', type: 'mission', prompt: 'Share your most embarrassing moment from the past year.', tags: ['social', 'icebreaker'] },
  { id: 'mm4', deckId: 'magickmixer', type: 'question', prompt: 'If you could master any skill instantly, what would it be?', tags: ['fun'] },
  { id: 'mm5', deckId: 'magickmixer', type: 'mission', prompt: 'Do your best impression of someone famous.', tags: ['social', 'fun'] },
  
  // Midnightmagick
  { id: 'mdm1', deckId: 'midnightmagick', type: 'question', prompt: 'What makes you feel most desired?', tags: ['intimacy', 'sensuality'] },
  { id: 'mdm2', deckId: 'midnightmagick', type: 'question', prompt: 'Describe your ideal romantic evening in detail.', tags: ['intimacy'] },
  { id: 'mdm3', deckId: 'midnightmagick', type: 'mission', prompt: 'Share a fantasy you&apos;ve never told anyone.', tags: ['intimacy', 'sensuality'] },
  { id: 'mdm4', deckId: 'midnightmagick', type: 'question', prompt: 'What&apos;s something new you&apos;d like to try together?', tags: ['intimacy'] },
  { id: 'mdm5', deckId: 'midnightmagick', type: 'mission', prompt: 'Give your partner a 5-minute massage focusing on their favorite spot.', tags: ['sensuality'] },
  
  // Sparkquestions
  { id: 'sq1', deckId: 'sparkquestions', type: 'question', prompt: 'What&apos;s a belief you held strongly that completely changed?', tags: ['deep', 'conversation'] },
  { id: 'sq2', deckId: 'sparkquestions', type: 'question', prompt: 'If you could relive one day of your life, which would it be?', tags: ['deep'] },
  { id: 'sq3', deckId: 'sparkquestions', type: 'question', prompt: 'What does success mean to you?', tags: ['deep', 'conversation'] },
  { id: 'sq4', deckId: 'sparkquestions', type: 'question', prompt: 'What&apos;s the most important lesson life has taught you?', tags: ['deep'] },
  { id: 'sq5', deckId: 'sparkquestions', type: 'question', prompt: 'If you&apos;ve ever had a "we shouldn&apos;t but we did" moment – jump once.', tags: ['social', 'fun', 'icebreaker'] },
  
  // Mirrormoments
  { id: 'mrm1', deckId: 'mirrormoments', type: 'question', prompt: 'What&apos;s something about yourself you&apos;re still learning to accept?', tags: ['reflection', 'vulnerability'] },
  { id: 'mrm2', deckId: 'mirrormoments', type: 'question', prompt: 'When do you feel most like yourself?', tags: ['reflection'] },
  { id: 'mrm3', deckId: 'mirrormoments', type: 'mission', prompt: 'Share a fear you&apos;ve been carrying lately.', tags: ['vulnerability'] },
  { id: 'mrm4', deckId: 'mirrormoments', type: 'question', prompt: 'What would your younger self think of who you are today?', tags: ['reflection'] },
  { id: 'mrm5', deckId: 'mirrormoments', type: 'question', prompt: 'What part of your personality do you hide most often?', tags: ['vulnerability'] },
  
  // Playfulsparks
  { id: 'ps1', deckId: 'playfulsparks', type: 'mission', prompt: 'Dance together to your favorite song for 2 minutes.', tags: ['fun', 'playful'] },
  { id: 'ps2', deckId: 'playfulsparks', type: 'mission', prompt: 'Make up a silly handshake together.', tags: ['fun', 'playful'] },
  { id: 'ps3', deckId: 'playfulsparks', type: 'question', prompt: 'If you could be any animal for a day, what would you be?', tags: ['fun'] },
  { id: 'ps4', deckId: 'playfulsparks', type: 'mission', prompt: 'Tell a joke that always makes you laugh.', tags: ['fun', 'playful'] },
  { id: 'ps5', deckId: 'playfulsparks', type: 'mission', prompt: 'Play rock-paper-scissors. Loser has to do 10 jumping jacks.', tags: ['playful'] },
  
  // Bondbuilders
  { id: 'bb1', deckId: 'bondbuilders', type: 'question', prompt: 'What&apos;s your favorite memory of us together?', tags: ['connection', 'bond'] },
  { id: 'bb2', deckId: 'bondbuilders', type: 'question', prompt: 'How do you feel most loved by me?', tags: ['connection'] },
  { id: 'bb3', deckId: 'bondbuilders', type: 'mission', prompt: 'Share three things you appreciate about your partner.', tags: ['bond'] },
  { id: 'bb4', deckId: 'bondbuilders', type: 'question', prompt: 'What&apos;s something I do that always makes you smile?', tags: ['connection'] },
  { id: 'bb5', deckId: 'bondbuilders', type: 'mission', prompt: 'Look into each other&apos;s eyes for 60 seconds without speaking.', tags: ['bond', 'connection'] },
  
  // Adventuresparks
  { id: 'as1', deckId: 'adventuresparks', type: 'mission', prompt: 'Plan a spontaneous mini-adventure for this weekend.', tags: ['adventure', 'challenge'] },
  { id: 'as2', deckId: 'adventuresparks', type: 'question', prompt: 'What&apos;s on your bucket list that we could do together?', tags: ['adventure'] },
  { id: 'as3', deckId: 'adventuresparks', type: 'mission', prompt: 'Try a new restaurant or cuisine you&apos;ve never had before.', tags: ['adventure'] },
  { id: 'as4', deckId: 'adventuresparks', type: 'question', prompt: 'If we could travel anywhere right now, where would we go?', tags: ['adventure'] },
  { id: 'as5', deckId: 'adventuresparks', type: 'mission', prompt: 'Take a walk somewhere you&apos;ve never been in your neighborhood.', tags: ['adventure', 'challenge'] },
  
  // Creativecharms
  { id: 'cc1', deckId: 'creativecharms', type: 'mission', prompt: 'Draw a portrait of each other in 3 minutes.', tags: ['creative', 'artistic'] },
  { id: 'cc2', deckId: 'creativecharms', type: 'mission', prompt: 'Write a haiku about your day together.', tags: ['creative'] },
  { id: 'cc3', deckId: 'creativecharms', type: 'question', prompt: 'If you could create any invention, what would it be?', tags: ['creative', 'imaginative'] },
  { id: 'cc4', deckId: 'creativecharms', type: 'mission', prompt: 'Make up a story together, taking turns adding one sentence at a time.', tags: ['creative', 'imaginative'] },
  { id: 'cc5', deckId: 'creativecharms', type: 'mission', prompt: 'Create a playlist of 5 songs that describe your relationship.', tags: ['creative'] },
  
  // Mirrorquests
  { id: 'mq1', deckId: 'mirrorquests', type: 'mission', prompt: 'Write down one thing you want to improve about yourself this month.', tags: ['growth', 'reflection'] },
  { id: 'mq2', deckId: 'mirrorquests', type: 'question', prompt: 'What habit would you like to develop?', tags: ['growth'] },
  { id: 'mq3', deckId: 'mirrorquests', type: 'mission', prompt: 'Share a goal you&apos;ve been afraid to pursue.', tags: ['growth', 'vulnerability'] },
  { id: 'mq4', deckId: 'mirrorquests', type: 'question', prompt: 'What does your ideal day look like?', tags: ['reflection'] },
  { id: 'mq5', deckId: 'mirrorquests', type: 'mission', prompt: 'Commit to one small act of self-care this week.', tags: ['growth'] },
  
  // Bondquests
  { id: 'bq1', deckId: 'bondquests', type: 'mission', prompt: 'Plan a date night together for next week.', tags: ['relationship', 'challenge'] },
  { id: 'bq2', deckId: 'bondquests', type: 'mission', prompt: 'Share one way you&apos;d like to grow together as a couple.', tags: ['relationship'] },
  { id: 'bq3', deckId: 'bondquests', type: 'question', prompt: 'What&apos;s a challenge we&apos;ve overcome together?', tags: ['relationship'] },
  { id: 'bq4', deckId: 'bondquests', type: 'mission', prompt: 'Create a relationship ritual you&apos;ll do every week.', tags: ['relationship', 'challenge'] },
  { id: 'bq5', deckId: 'bondquests', type: 'question', prompt: 'What&apos;s something you want us to experience together in the next year?', tags: ['relationship'] },
];

// Get cards for a specific deck
export function getCardsForDeck(deckId: string): Card[] {
  return cards.filter(card => card.deckId === deckId);
}

// Get a random card from a deck
export function getRandomCard(deckId: string): Card | null {
  const deckCards = getCardsForDeck(deckId);
  if (deckCards.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * deckCards.length);
  return deckCards[randomIndex];
}

// Get daily card (deterministic based on date)
export function getDailyCard(): Card {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  // Simple hash function to get consistent index for the day
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  const index = Math.abs(hash) % cards.length;
  return cards[index];
}
