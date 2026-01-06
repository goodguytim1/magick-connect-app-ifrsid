
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
// Magickmixer (replace your 5 with these 20)
{ id: 'mm1', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever texted an ex after midnight → take 3 sips or do 3 squats.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm2', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever said "I\'m on the way" while still at home → hop on one leg 3 times.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm3', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever caught feelings you didn\'t plan for → touch your chest and take a sip.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm4', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever gone back to someone you said you were done with → do 5 jumping jacks.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm5', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever stalked someone\'s social media and accidentally liked an old post → take 2 sips.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm6', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever lied about why you were late → spin in a circle once.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm7', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever had a crush on someone in this room → take a sip or smile quietly.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm8', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever ghosted someone → do 3 squats or take a sip.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm9', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever been ghosted → point at the ceiling and take a sip.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm10', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever stayed out way later than you planned → jump twice.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm11', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever deleted a text and rewrote it three times → take 2 sips.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm12', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever caught yourself catching feelings way too fast → do 3 squats.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm13', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever said "it\'s nothing" when it was definitely something → take a sip.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm14', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever flirted just for fun → clap 3 times.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm15', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever went out with no plans and had a wild night → take 3 sips or do 5 jumping jacks.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm16', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever overshared a little too much → do a shoulder shimmy.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm17', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever pretended you were unbothered when you were definitely bothered → take a sip.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm18', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever sent a risky text and immediately put your phone face down → do 3 squats.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm19', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever stayed in something longer than you should have → take 2 sips.', tags: ['social', 'fun', 'icebreaker', '21+'] },
{ id: 'mm20', deckId: 'magickmixer', type: 'question', prompt: 'If you\'ve ever had a "we shouldn\'t but we did" moment → jump once.', tags: ['social', 'fun', 'icebreaker', '21+'] },

  
// Midnightmagick
{ id: 'mdm1', deckId: 'midnightmagick', type: 'question', prompt: 'What makes you feel most emotionally connected during sex?', tags: ['intimacy', 'emotional', 'sex', 'connection'] },
{ id: 'mdm2', deckId: 'midnightmagick', type: 'question', prompt: 'Do you need emotional closeness to fully enjoy physical intimacy?', tags: ['intimacy', 'emotional', 'sex', 'connection'] },
{ id: 'mdm3', deckId: 'midnightmagick', type: 'question', prompt: 'What helps you relax and open your body to someone?', tags: ['intimacy', 'sensual', 'relaxation', 'trust'] },
{ id: 'mdm4', deckId: 'midnightmagick', type: 'question', prompt: 'What kind of aftercare makes you feel appreciated?', tags: ['intimacy', 'aftercare', 'appreciation', 'care'] },
{ id: 'mdm5', deckId: 'midnightmagick', type: 'question', prompt: 'When do you feel most desired by a partner?', tags: ['desire', 'intimacy', 'attraction', 'validation'] },

{ id: 'mdm6', deckId: 'midnightmagick', type: 'question', prompt: 'Do you enjoy teasing before sex, or getting straight to it?', tags: ['desire', 'playful', 'foreplay', 'preferences'] },
{ id: 'mdm7', deckId: 'midnightmagick', type: 'question', prompt: 'What kind of flirting gets you in the mood the fastest?', tags: ['flirting', 'desire', 'arousal', 'chemistry'] },
{ id: 'mdm8', deckId: 'midnightmagick', type: 'question', prompt: 'Do you like playful energy or intense focus more during sex?', tags: ['sex', 'energy', 'preferences', 'mood'] },
{ id: 'mdm9', deckId: 'midnightmagick', type: 'question', prompt: 'How important is sexual chemistry compared to emotional chemistry for you?', tags: ['chemistry', 'connection', 'sex', 'emotional'] },
{ id: 'mdm10', deckId: 'midnightmagick', type: 'question', prompt: 'What kind of vibe makes sex unforgettable for you?', tags: ['sex', 'memorable', 'vibe', 'preferences'] },

{ id: 'mdm11', deckId: 'midnightmagick', type: 'question', prompt: 'What\'s your favorite position?', tags: ['sex', 'position', 'preferences', 'direct'] },
{ id: 'mdm12', deckId: 'midnightmagick', type: 'question', prompt: 'Do you like being on top, on the bottom, or switching?', tags: ['sex', 'position', 'preferences', 'dynamics'] },
{ id: 'mdm13', deckId: 'midnightmagick', type: 'question', prompt: 'Do you prefer slow, deep connection or fast, intense sex?', tags: ['sex', 'pace', 'preferences', 'intensity'] },
{ id: 'mdm14', deckId: 'midnightmagick', type: 'question', prompt: 'Do you like to lead, be led, or take turns?', tags: ['sex', 'dynamics', 'control', 'preferences'] },
{ id: 'mdm15', deckId: 'midnightmagick', type: 'question', prompt: 'What position makes you feel the most powerful?', tags: ['sex', 'position', 'power', 'confidence'] },
{ id: 'mdm16', deckId: 'midnightmagick', type: 'question', prompt: 'What position makes you feel the most desired?', tags: ['sex', 'position', 'desire', 'validation'] },
{ id: 'mdm17', deckId: 'midnightmagick', type: 'question', prompt: 'Do you like eye contact during sex?', tags: ['sex', 'intimacy', 'connection', 'eye-contact'] },
{ id: 'mdm18', deckId: 'midnightmagick', type: 'question', prompt: 'Do you enjoy talking during sex, or staying quiet?', tags: ['sex', 'communication', 'preferences', 'verbal'] },

{ id: 'mdm19', deckId: 'midnightmagick', type: 'question', prompt: 'Do you enjoy being in control, being controlled, or a balance of both?', tags: ['power', 'control', 'dynamics', 'preferences'] },
{ id: 'mdm20', deckId: 'midnightmagick', type: 'question', prompt: 'What makes power dynamics feel safe and sexy for you?', tags: ['power', 'safety', 'consent', 'dynamics'] },
{ id: 'mdm21', deckId: 'midnightmagick', type: 'question', prompt: 'Do you like when a partner takes charge without asking?', tags: ['power', 'control', 'spontaneity', 'consent'] },
{ id: 'mdm22', deckId: 'midnightmagick', type: 'question', prompt: 'What\'s your favorite way to give up control?', tags: ['power', 'submission', 'trust', 'dynamics'] },
{ id: 'mdm23', deckId: 'midnightmagick', type: 'question', prompt: 'What\'s your favorite way to take control?', tags: ['power', 'dominance', 'confidence', 'dynamics'] },

{ id: 'mdm24', deckId: 'midnightmagick', type: 'question', prompt: 'Is there something sexual you\'ve always wanted to try but haven\'t yet?', tags: ['curiosity', 'exploration', 'fantasy', 'desires'] },
{ id: 'mdm25', deckId: 'midnightmagick', type: 'question', prompt: 'What kind of sexual energy are you curious to explore more of?', tags: ['curiosity', 'exploration', 'energy', 'growth'] },
{ id: 'mdm26', deckId: 'midnightmagick', type: 'question', prompt: 'Do you enjoy routine or variety more in sex?', tags: ['preferences', 'variety', 'routine', 'exploration'] },
{ id: 'mdm27', deckId: 'midnightmagick', type: 'question', prompt: 'What turns curiosity into confidence for you?', tags: ['curiosity', 'confidence', 'growth', 'exploration'] },
{ id: 'mdm28', deckId: 'midnightmagick', type: 'question', prompt: 'What makes exploration feel exciting instead of awkward?', tags: ['exploration', 'comfort', 'excitement', 'safety'] },

{ id: 'mdm29', deckId: 'midnightmagick', type: 'question', prompt: 'How do you like to communicate what you want in bed?', tags: ['communication', 'boundaries', 'preferences', 'consent'] },
{ id: 'mdm30', deckId: 'midnightmagick', type: 'question', prompt: 'What\'s the easiest way for a partner to check in with you during sex?', tags: ['communication', 'consent', 'check-in', 'care'] },
{ id: 'mdm31', deckId: 'midnightmagick', type: 'question', prompt: 'How do you like to say no without killing the mood?', tags: ['boundaries', 'communication', 'consent', 'respect'] },
{ id: 'mdm32', deckId: 'midnightmagick', type: 'question', prompt: 'What makes you feel respected while still feeling desired?', tags: ['respect', 'desire', 'boundaries', 'balance'] },
{ id: 'mdm33', deckId: 'midnightmagick', type: 'question', prompt: 'How do you like to reconnect emotionally after sex?', tags: ['aftercare', 'emotional', 'connection', 'intimacy'] },

{ id: 'mdm34', deckId: 'midnightmagick', type: 'question', prompt: 'How has your sexuality evolved over time?', tags: ['reflection', 'growth', 'sexuality', 'evolution'] },
{ id: 'mdm35', deckId: 'midnightmagick', type: 'question', prompt: 'What has past sex taught you about yourself?', tags: ['reflection', 'self-discovery', 'learning', 'growth'] },
{ id: 'mdm36', deckId: 'midnightmagick', type: 'question', prompt: 'What do you need now that you didn\'t before?', tags: ['growth', 'needs', 'evolution', 'self-awareness'] },
{ id: 'mdm37', deckId: 'midnightmagick', type: 'question', prompt: 'What kind of sex do you want more of in your life?', tags: ['desires', 'preferences', 'goals', 'satisfaction'] },
{ id: 'mdm38', deckId: 'midnightmagick', type: 'question', prompt: 'What does satisfying sex mean to you today?', tags: ['satisfaction', 'definition', 'values', 'reflection'] },

  
// Sparkquestions
{ id: 'sq1', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the most unusual food you\'ve ever tried?', tags: ['food', 'fun', 'conversation'] },
{ id: 'sq2', deckId: 'sparkquestions', type: 'question', prompt: 'If you could swap lives with a celebrity for one day, who would it be?', tags: ['fun', 'imagination', 'celebrity'] },
{ id: 'sq3', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s your guilty pleasure TV show or movie?', tags: ['entertainment', 'fun', 'personal'] },
{ id: 'sq4', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the funniest thing you believed as a kid?', tags: ['childhood', 'humor', 'memory'] },
{ id: 'sq5', deckId: 'sparkquestions', type: 'question', prompt: 'If you had a theme song that played when you walked into a room, what would it be?', tags: ['music', 'fun', 'personality'] },
{ id: 'sq6', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the weirdest talent you have?', tags: ['talent', 'fun', 'unique'] },
{ id: 'sq7', deckId: 'sparkquestions', type: 'question', prompt: 'If you had to eat one meal for the rest of your life, what would it be?', tags: ['food', 'fun', 'preferences'] },
{ id: 'sq8', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the most spontaneous thing you\'ve ever done?', tags: ['adventure', 'memory', 'spontaneity'] },
{ id: 'sq9', deckId: 'sparkquestions', type: 'question', prompt: 'Which fictional character do you relate to the most?', tags: ['entertainment', 'personality', 'fun'] },
{ id: 'sq10', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s your go-to karaoke song?', tags: ['music', 'fun', 'entertainment'] },
{ id: 'sq11', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the worst haircut you\'ve ever had?', tags: ['humor', 'memory', 'personal'] },
{ id: 'sq12', deckId: 'sparkquestions', type: 'question', prompt: 'Would you rather explore space or the deep ocean?', tags: ['adventure', 'preferences', 'imagination'] },
{ id: 'sq13', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the strangest thing you\'ve ever collected?', tags: ['hobby', 'unique', 'personal'] },
{ id: 'sq14', deckId: 'sparkquestions', type: 'question', prompt: 'What is your "happy" food?', tags: ['food', 'comfort', 'personal'] },
{ id: 'sq15', deckId: 'sparkquestions', type: 'question', prompt: 'If you had a time machine, what\'s the first year you\'d visit?', tags: ['history', 'imagination', 'adventure'] },
{ id: 'sq16', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s your dream vacation spot?', tags: ['travel', 'dreams', 'adventure'] },
{ id: 'sq17', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s your most used emoji?', tags: ['fun', 'communication', 'personal'] },
{ id: 'sq18', deckId: 'sparkquestions', type: 'question', prompt: 'Do you prefer sunrise or sunset?', tags: ['nature', 'preferences', 'beauty'] },
{ id: 'sq19', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s your "comfort" movie?', tags: ['entertainment', 'comfort', 'personal'] },
{ id: 'sq20', deckId: 'sparkquestions', type: 'question', prompt: 'If you could instantly learn a new skill, what would it be?', tags: ['learning', 'dreams', 'skills'] },
{ id: 'sq21', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the funniest prank you\'ve ever pulled or had pulled on you?', tags: ['humor', 'memory', 'fun'] },
{ id: 'sq22', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s your biggest pet peeve?', tags: ['personal', 'preferences', 'quirks'] },
{ id: 'sq23', deckId: 'sparkquestions', type: 'question', prompt: 'Coffee, tea, or neither?', tags: ['food', 'preferences', 'lifestyle'] },
{ id: 'sq24', deckId: 'sparkquestions', type: 'question', prompt: 'If you could only wear one color forever, what would it be?', tags: ['fashion', 'preferences', 'fun'] },
{ id: 'sq25', deckId: 'sparkquestions', type: 'question', prompt: 'What\'s the strangest dream you\'ve had?', tags: ['dreams', 'imagination', 'personal'] },

  
// Mirrormoments
{ id: 'mrm1', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s the best advice you\'ve ever received?', tags: ['wisdom', 'reflection', 'growth'] },
{ id: 'mrm2', deckId: 'mirrormoments', type: 'question', prompt: 'What life event shaped you the most?', tags: ['reflection', 'growth', 'deep'] },
{ id: 'mrm3', deckId: 'mirrormoments', type: 'question', prompt: 'Who\'s been the biggest influence in your life?', tags: ['relationships', 'reflection', 'gratitude'] },
{ id: 'mrm4', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s your proudest accomplishment?', tags: ['achievement', 'pride', 'reflection'] },
{ id: 'mrm5', deckId: 'mirrormoments', type: 'question', prompt: 'What do you think your younger self would be proud of you for?', tags: ['reflection', 'growth', 'pride'] },
{ id: 'mrm6', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s something you\'re still learning about yourself?', tags: ['self-discovery', 'growth', 'reflection'] },
{ id: 'mrm7', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s the hardest decision you\'ve had to make?', tags: ['challenges', 'reflection', 'deep'] },
{ id: 'mrm8', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s a belief you had 5 years ago that\'s changed?', tags: ['growth', 'reflection', 'evolution'] },
{ id: 'mrm9', deckId: 'mirrormoments', type: 'question', prompt: 'What do you value most in a friendship?', tags: ['relationships', 'values', 'reflection'] },
{ id: 'mrm10', deckId: 'mirrormoments', type: 'question', prompt: 'When do you feel most at peace?', tags: ['peace', 'self-awareness', 'reflection'] },
{ id: 'mrm11', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s the scariest thing you\'ve overcome?', tags: ['courage', 'growth', 'challenges'] },
{ id: 'mrm12', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s your definition of love?', tags: ['love', 'philosophy', 'deep'] },
{ id: 'mrm13', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s one fear you\'d like to conquer?', tags: ['fear', 'growth', 'goals'] },
{ id: 'mrm14', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s your most sentimental possession?', tags: ['memory', 'sentiment', 'personal'] },
{ id: 'mrm15', deckId: 'mirrormoments', type: 'question', prompt: 'When do you feel the most alive?', tags: ['passion', 'self-awareness', 'reflection'] },
{ id: 'mrm16', deckId: 'mirrormoments', type: 'question', prompt: 'What habit are you most proud of breaking?', tags: ['growth', 'achievement', 'reflection'] },
{ id: 'mrm17', deckId: 'mirrormoments', type: 'question', prompt: 'Who do you admire most?', tags: ['admiration', 'values', 'reflection'] },
{ id: 'mrm18', deckId: 'mirrormoments', type: 'question', prompt: 'What do you want your legacy to be?', tags: ['legacy', 'purpose', 'deep'] },
{ id: 'mrm19', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s a lesson you learned the hard way?', tags: ['wisdom', 'growth', 'challenges'] },
{ id: 'mrm20', deckId: 'mirrormoments', type: 'question', prompt: 'What makes you feel truly appreciated?', tags: ['appreciation', 'love-language', 'reflection'] },
{ id: 'mrm21', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s a dream you\'ve given up on (or still holding onto)?', tags: ['dreams', 'reflection', 'deep'] },
{ id: 'mrm22', deckId: 'mirrormoments', type: 'question', prompt: 'If money wasn\'t an issue, what would you be doing right now?', tags: ['dreams', 'passion', 'reflection'] },
{ id: 'mrm23', deckId: 'mirrormoments', type: 'question', prompt: 'What do you want more of in your life?', tags: ['goals', 'reflection', 'growth'] },
{ id: 'mrm24', deckId: 'mirrormoments', type: 'question', prompt: 'What do you wish people understood about you?', tags: ['understanding', 'personal', 'deep'] },
{ id: 'mrm25', deckId: 'mirrormoments', type: 'question', prompt: 'What\'s the most important value you live by?', tags: ['values', 'philosophy', 'reflection'] },

  
// Playfulsparks
{ id: 'ps1', deckId: 'playfulsparks', type: 'question', prompt: 'Aliens land tomorrow — what\'s the first thing you ask them?', tags: ['imagination', 'fun', 'aliens'] },
{ id: 'ps2', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s the most ridiculous fashion trend you\'ve followed?', tags: ['fashion', 'humor', 'memory'] },
{ id: 'ps3', deckId: 'playfulsparks', type: 'question', prompt: 'If you could live inside any movie, which would it be?', tags: ['movies', 'imagination', 'fun'] },
{ id: 'ps4', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s your spirit animal?', tags: ['personality', 'fun', 'animals'] },
{ id: 'ps5', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s your zombie apocalypse survival plan?', tags: ['survival', 'imagination', 'fun'] },
{ id: 'ps6', deckId: 'playfulsparks', type: 'question', prompt: 'If you had to create a holiday, what would it celebrate?', tags: ['creativity', 'fun', 'imagination'] },
{ id: 'ps7', deckId: 'playfulsparks', type: 'question', prompt: 'Which superhero or villain do you think you\'re most like?', tags: ['personality', 'superheroes', 'fun'] },
{ id: 'ps8', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s the weirdest food combo you secretly love?', tags: ['food', 'quirky', 'fun'] },
{ id: 'ps9', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s your karaoke strategy: serious or silly?', tags: ['music', 'personality', 'fun'] },
{ id: 'ps10', deckId: 'playfulsparks', type: 'question', prompt: 'If you could switch bodies with someone for a day, who would it be?', tags: ['imagination', 'fun', 'curiosity'] },
{ id: 'ps11', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s your guilty pleasure snack?', tags: ['food', 'personal', 'fun'] },
{ id: 'ps12', deckId: 'playfulsparks', type: 'question', prompt: 'Would you rather be able to fly or be invisible?', tags: ['superpowers', 'imagination', 'fun'] },
{ id: 'ps13', deckId: 'playfulsparks', type: 'question', prompt: 'If you were a flavor, what would it be?', tags: ['personality', 'fun', 'creative'] },
{ id: 'ps14', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s the weirdest nickname you\'ve had?', tags: ['humor', 'memory', 'personal'] },
{ id: 'ps15', deckId: 'playfulsparks', type: 'question', prompt: 'Which conspiracy theory do you secretly wonder about?', tags: ['curiosity', 'fun', 'mystery'] },
{ id: 'ps16', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s the strangest superstition you\'ve heard of?', tags: ['culture', 'fun', 'curiosity'] },
{ id: 'ps17', deckId: 'playfulsparks', type: 'question', prompt: 'If animals could talk, which would be the rudest?', tags: ['animals', 'humor', 'imagination'] },
{ id: 'ps18', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s the most embarrassing thing you\'ve done in public?', tags: ['humor', 'memory', 'embarrassment'] },
{ id: 'ps19', deckId: 'playfulsparks', type: 'question', prompt: 'Which emoji describes you best today?', tags: ['mood', 'fun', 'communication'] },
{ id: 'ps20', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s the last thing that made you laugh until you cried?', tags: ['humor', 'memory', 'joy'] },
{ id: 'ps21', deckId: 'playfulsparks', type: 'question', prompt: 'Do you believe in luck?', tags: ['beliefs', 'philosophy', 'fun'] },
{ id: 'ps22', deckId: 'playfulsparks', type: 'question', prompt: 'If you could instantly master a language, which one would it be?', tags: ['language', 'learning', 'dreams'] },
{ id: 'ps23', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s your guilty pleasure music artist?', tags: ['music', 'personal', 'fun'] },
{ id: 'ps24', deckId: 'playfulsparks', type: 'question', prompt: 'What\'s your weirdest "shower thought"?', tags: ['thoughts', 'quirky', 'fun'] },
{ id: 'ps25', deckId: 'playfulsparks', type: 'question', prompt: 'If your life was a book, what would the title be?', tags: ['creativity', 'personal', 'fun'] },

  
// Bondbuilders
{ id: 'bb1', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your love language?', tags: ['love-language', 'relationships', 'connection'] },
{ id: 'bb2', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your favorite memory with friends?', tags: ['friendship', 'memory', 'connection'] },
{ id: 'bb3', deckId: 'bondbuilders', type: 'question', prompt: 'What makes you feel most connected to others?', tags: ['connection', 'relationships', 'emotional'] },
{ id: 'bb4', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s the most romantic thing you\'ve ever done (or had done for you)?', tags: ['romance', 'memory', 'love'] },
{ id: 'bb5', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your favorite "bonding" activity?', tags: ['activities', 'connection', 'fun'] },
{ id: 'bb6', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s the best compliment you\'ve ever gotten?', tags: ['compliments', 'appreciation', 'memory'] },
{ id: 'bb7', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your biggest relationship lesson so far?', tags: ['wisdom', 'relationships', 'growth'] },
{ id: 'bb8', deckId: 'bondbuilders', type: 'question', prompt: 'How do you like to celebrate milestones?', tags: ['celebration', 'preferences', 'connection'] },
{ id: 'bb9', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your friendship "green flag"?', tags: ['friendship', 'values', 'relationships'] },
{ id: 'bb10', deckId: 'bondbuilders', type: 'question', prompt: 'What kind of people inspire you most?', tags: ['inspiration', 'values', 'connection'] },
{ id: 'bb11', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your favorite family tradition?', tags: ['family', 'tradition', 'memory'] },
{ id: 'bb12', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your biggest "ick" in relationships?', tags: ['relationships', 'boundaries', 'preferences'] },
{ id: 'bb13', deckId: 'bondbuilders', type: 'question', prompt: 'Who\'s your role model for love or friendship?', tags: ['role-models', 'relationships', 'inspiration'] },
{ id: 'bb14', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your dream adventure with friends or a partner?', tags: ['adventure', 'dreams', 'connection'] },
{ id: 'bb15', deckId: 'bondbuilders', type: 'question', prompt: 'What do you look for in a teammate?', tags: ['teamwork', 'values', 'relationships'] },
{ id: 'bb16', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your go-to way to cheer someone up?', tags: ['support', 'kindness', 'connection'] },
{ id: 'bb17', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your favorite bonding memory at work or school?', tags: ['memory', 'connection', 'friendship'] },
{ id: 'bb18', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your perfect first date idea?', tags: ['dating', 'romance', 'preferences'] },
{ id: 'bb19', deckId: 'bondbuilders', type: 'question', prompt: 'How do you show appreciation for people in your life?', tags: ['appreciation', 'love-language', 'connection'] },
{ id: 'bb20', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s a "dealbreaker" for you in relationships or friendships?', tags: ['boundaries', 'values', 'relationships'] },
{ id: 'bb21', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your favorite kind of surprise?', tags: ['surprises', 'preferences', 'joy'] },
{ id: 'bb22', deckId: 'bondbuilders', type: 'question', prompt: 'How do you handle conflict in relationships?', tags: ['conflict', 'communication', 'relationships'] },
{ id: 'bb23', deckId: 'bondbuilders', type: 'question', prompt: 'What does "quality time" mean to you?', tags: ['quality-time', 'love-language', 'connection'] },
{ id: 'bb24', deckId: 'bondbuilders', type: 'question', prompt: 'What makes someone unforgettable to you?', tags: ['connection', 'memory', 'relationships'] },
{ id: 'bb25', deckId: 'bondbuilders', type: 'question', prompt: 'What\'s your idea of the perfect day with someone?', tags: ['quality-time', 'dreams', 'connection'] },

  
// Adventuresparks
{ id: 'as1', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to the tallest building in your city and take a picture of the view.', tags: ['adventure', 'photography', 'city-exploration'] },
{ id: 'as2', deckId: 'adventuresparks', type: 'mission', prompt: 'Visit a local museum or gallery and find your favorite piece.', tags: ['culture', 'art', 'exploration'] },
{ id: 'as3', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to a random bus stop, take the bus, and get off after 5 stops — explore.', tags: ['spontaneous', 'exploration', 'adventure'] },
{ id: 'as4', deckId: 'adventuresparks', type: 'mission', prompt: 'Find a hidden gem restaurant with fewer than 20 reviews online.', tags: ['food', 'discovery', 'adventure'] },
{ id: 'as5', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to a park and build a mini fort out of natural materials.', tags: ['outdoor', 'creative', 'playful'] },
{ id: 'as6', deckId: 'adventuresparks', type: 'mission', prompt: 'Visit a new neighborhood you\'ve never walked through.', tags: ['exploration', 'walking', 'discovery'] },
{ id: 'as7', deckId: 'adventuresparks', type: 'mission', prompt: 'Explore a thrift store and each pick one quirky item for the other.', tags: ['shopping', 'fun', 'gift'] },
{ id: 'as8', deckId: 'adventuresparks', type: 'mission', prompt: 'Go geocaching together.', tags: ['outdoor', 'treasure-hunt', 'adventure'] },
{ id: 'as9', deckId: 'adventuresparks', type: 'mission', prompt: 'Find a mural or graffiti wall and take a creative photo in front of it.', tags: ['art', 'photography', 'urban'] },
{ id: 'as10', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to a pet store and play with the animals.', tags: ['animals', 'fun', 'playful'] },
{ id: 'as11', deckId: 'adventuresparks', type: 'mission', prompt: 'Take a spontaneous day trip within 2 hours of your city.', tags: ['travel', 'spontaneous', 'adventure'] },
{ id: 'as12', deckId: 'adventuresparks', type: 'mission', prompt: 'Go on a "sunrise mission" — watch the sunrise from a scenic spot.', tags: ['nature', 'sunrise', 'romantic'] },
{ id: 'as13', deckId: 'adventuresparks', type: 'mission', prompt: 'Visit the oldest building in your city.', tags: ['history', 'culture', 'exploration'] },
{ id: 'as14', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to a farmer\'s market and pick one food neither of you has tried.', tags: ['food', 'discovery', 'local'] },
{ id: 'as15', deckId: 'adventuresparks', type: 'mission', prompt: 'Hunt for a "weird landmark" in your city and take a picture.', tags: ['exploration', 'photography', 'quirky'] },
{ id: 'as16', deckId: 'adventuresparks', type: 'mission', prompt: 'Find the quietest spot in your city and just sit there.', tags: ['peace', 'meditation', 'discovery'] },
{ id: 'as17', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to a bookstore, pick a book for each other, and exchange.', tags: ['books', 'thoughtful', 'gift'] },
{ id: 'as18', deckId: 'adventuresparks', type: 'mission', prompt: 'Explore a local flea market together.', tags: ['shopping', 'discovery', 'local'] },
{ id: 'as19', deckId: 'adventuresparks', type: 'mission', prompt: 'Go to a playground and act like kids again.', tags: ['playful', 'fun', 'nostalgia'] },
{ id: 'as20', deckId: 'adventuresparks', type: 'mission', prompt: 'Find a place that sells the weirdest flavored drink and try it.', tags: ['food', 'adventure', 'quirky'] },
{ id: 'as21', deckId: 'adventuresparks', type: 'mission', prompt: 'Go stargazing away from city lights.', tags: ['nature', 'romantic', 'night'] },
{ id: 'as22', deckId: 'adventuresparks', type: 'mission', prompt: 'Try a food truck you\'ve never eaten from before.', tags: ['food', 'adventure', 'local'] },
{ id: 'as23', deckId: 'adventuresparks', type: 'mission', prompt: 'Find a hidden staircase, alley, or path in your city.', tags: ['exploration', 'discovery', 'urban'] },
{ id: 'as24', deckId: 'adventuresparks', type: 'mission', prompt: 'Visit a historical monument near you.', tags: ['history', 'culture', 'education'] },
{ id: 'as25', deckId: 'adventuresparks', type: 'mission', prompt: 'Do a "random spin" on Google Maps, and go wherever it lands nearby.', tags: ['spontaneous', 'adventure', 'exploration'] },

// Creativecharms
{ id: 'cc1', deckId: 'creativecharms', type: 'mission', prompt: 'Buy a disposable camera and document your day together.', tags: ['photography', 'creative', 'memory'] },
{ id: 'cc2', deckId: 'creativecharms', type: 'mission', prompt: 'Write and perform a silly poem about each other.', tags: ['creative', 'fun', 'performance'] },
{ id: 'cc3', deckId: 'creativecharms', type: 'mission', prompt: 'Draw portraits of each other (no matter the skill level).', tags: ['art', 'creative', 'fun'] },
{ id: 'cc4', deckId: 'creativecharms', type: 'mission', prompt: 'Make up a 2-minute comedy skit and act it out.', tags: ['performance', 'humor', 'creative'] },
{ id: 'cc5', deckId: 'creativecharms', type: 'mission', prompt: 'Write a 6-line rap about your day.', tags: ['music', 'creative', 'fun'] },
{ id: 'cc6', deckId: 'creativecharms', type: 'mission', prompt: 'Do a chalk-art session on the sidewalk.', tags: ['art', 'outdoor', 'creative'] },
{ id: 'cc7', deckId: 'creativecharms', type: 'mission', prompt: 'Create a TikTok or reel about your adventure.', tags: ['social-media', 'creative', 'fun'] },
{ id: 'cc8', deckId: 'creativecharms', type: 'mission', prompt: 'Bake cookies together — but one person is blindfolded.', tags: ['cooking', 'fun', 'challenge'] },
{ id: 'cc9', deckId: 'creativecharms', type: 'mission', prompt: 'Create a playlist together and listen to it on a walk.', tags: ['music', 'outdoor', 'bonding'] },
{ id: 'cc10', deckId: 'creativecharms', type: 'mission', prompt: 'Record a "podcast-style" voice note interviewing each other.', tags: ['conversation', 'creative', 'fun'] },
{ id: 'cc11', deckId: 'creativecharms', type: 'mission', prompt: 'Build a Lego set together.', tags: ['building', 'teamwork', 'fun'] },
{ id: 'cc12', deckId: 'creativecharms', type: 'mission', prompt: 'Create your own secret handshake.', tags: ['fun', 'bonding', 'creative'] },
{ id: 'cc13', deckId: 'creativecharms', type: 'mission', prompt: 'Make a vision board for your dream adventure.', tags: ['creative', 'planning', 'dreams'] },
{ id: 'cc14', deckId: 'creativecharms', type: 'mission', prompt: 'Each draw a treasure map and swap to follow it.', tags: ['creative', 'adventure', 'fun'] },
{ id: 'cc15', deckId: 'creativecharms', type: 'mission', prompt: 'Play "photo roulette" — take random silly pictures around town.', tags: ['photography', 'fun', 'exploration'] },
{ id: 'cc16', deckId: 'creativecharms', type: 'mission', prompt: 'Go on a $10 gift challenge at a dollar store.', tags: ['shopping', 'fun', 'challenge'] },
{ id: 'cc17', deckId: 'creativecharms', type: 'mission', prompt: 'Write a short story together, alternating sentences.', tags: ['creative', 'writing', 'teamwork'] },
{ id: 'cc18', deckId: 'creativecharms', type: 'mission', prompt: 'Make your own "inside joke" by the end of the night.', tags: ['bonding', 'fun', 'humor'] },
{ id: 'cc19', deckId: 'creativecharms', type: 'mission', prompt: 'Build paper airplanes and race them.', tags: ['fun', 'competition', 'creative'] },
{ id: 'cc20', deckId: 'creativecharms', type: 'mission', prompt: 'Paint rocks and hide them around the city.', tags: ['art', 'creative', 'kindness'] },
{ id: 'cc21', deckId: 'creativecharms', type: 'mission', prompt: 'Try karaoke, but only pick songs from before the year 2000.', tags: ['music', 'fun', 'performance'] },
{ id: 'cc22', deckId: 'creativecharms', type: 'mission', prompt: 'Put together a care package for a stranger.', tags: ['kindness', 'creative', 'giving'] },
{ id: 'cc23', deckId: 'creativecharms', type: 'mission', prompt: 'Make up a short dance routine together.', tags: ['dance', 'creative', 'fun'] },
{ id: 'cc24', deckId: 'creativecharms', type: 'mission', prompt: 'Record a fake commercial for a random object near you.', tags: ['performance', 'humor', 'creative'] },
{ id: 'cc25', deckId: 'creativecharms', type: 'mission', prompt: 'Create a superhero persona for each other.', tags: ['creative', 'imagination', 'fun'] },

// Mirrorquests
{ id: 'mq1', deckId: 'mirrorquests', type: 'mission', prompt: 'Go to the last place you cried and make a happy memory there.', tags: ['emotional', 'healing', 'reflection'] },
{ id: 'mq2', deckId: 'mirrorquests', type: 'mission', prompt: 'Write letters to your future selves and exchange them.', tags: ['reflection', 'future', 'bonding'] },
{ id: 'mq3', deckId: 'mirrorquests', type: 'mission', prompt: 'Visit a place that holds sentimental value to one of you.', tags: ['memory', 'sentimental', 'sharing'] },
{ id: 'mq4', deckId: 'mirrorquests', type: 'mission', prompt: 'Each share a song that means a lot to you and explain why.', tags: ['music', 'emotional', 'sharing'] },
{ id: 'mq5', deckId: 'mirrorquests', type: 'mission', prompt: 'Go to a quiet park and journal for 15 minutes, then share.', tags: ['reflection', 'writing', 'nature'] },
{ id: 'mq6', deckId: 'mirrorquests', type: 'mission', prompt: 'Make a list of your top 5 values together.', tags: ['values', 'reflection', 'bonding'] },
{ id: 'mq7', deckId: 'mirrorquests', type: 'mission', prompt: 'Go to your old school or neighborhood and tell stories.', tags: ['memory', 'nostalgia', 'storytelling'] },
{ id: 'mq8', deckId: 'mirrorquests', type: 'mission', prompt: 'Share your favorite childhood memory in the place it happened.', tags: ['childhood', 'memory', 'sharing'] },
{ id: 'mq9', deckId: 'mirrorquests', type: 'mission', prompt: 'Create a "time capsule" with small objects and bury it.', tags: ['creative', 'future', 'bonding'] },
{ id: 'mq10', deckId: 'mirrorquests', type: 'mission', prompt: 'Each buy an object under $5 that represents your personality.', tags: ['self-expression', 'gift', 'creative'] },
{ id: 'mq11', deckId: 'mirrorquests', type: 'mission', prompt: 'Write a gratitude list of 10 things and share.', tags: ['gratitude', 'reflection', 'positive'] },
{ id: 'mq12', deckId: 'mirrorquests', type: 'mission', prompt: 'Visit a local church, temple, or mosque and talk about spirituality.', tags: ['spirituality', 'reflection', 'deep'] },
{ id: 'mq13', deckId: 'mirrorquests', type: 'mission', prompt: 'Share your "biggest dream" while watching the stars.', tags: ['dreams', 'nature', 'sharing'] },
{ id: 'mq14', deckId: 'mirrorquests', type: 'mission', prompt: 'Recreate an old photo from your childhood.', tags: ['nostalgia', 'photography', 'fun'] },
{ id: 'mq15', deckId: 'mirrorquests', type: 'mission', prompt: 'Write a list of fears and burn it (safely) together.', tags: ['fear', 'release', 'healing'] },
{ id: 'mq16', deckId: 'mirrorquests', type: 'mission', prompt: 'Share your "first crush" story.', tags: ['memory', 'romance', 'sharing'] },
{ id: 'mq17', deckId: 'mirrorquests', type: 'mission', prompt: 'Visit a cemetery and reflect on life lessons.', tags: ['reflection', 'life', 'deep'] },
{ id: 'mq18', deckId: 'mirrorquests', type: 'mission', prompt: 'Write an anonymous kind note and leave it in a public place.', tags: ['kindness', 'giving', 'positive'] },
{ id: 'mq19', deckId: 'mirrorquests', type: 'mission', prompt: 'Take each other to a place that shaped who you are.', tags: ['identity', 'sharing', 'meaningful'] },
{ id: 'mq20', deckId: 'mirrorquests', type: 'mission', prompt: 'Visit your favorite "escape spot" and explain why.', tags: ['personal', 'sharing', 'peace'] },
{ id: 'mq21', deckId: 'mirrorquests', type: 'mission', prompt: 'Each share something you\'ve never told anyone before.', tags: ['vulnerability', 'trust', 'deep'] },
{ id: 'mq22', deckId: 'mirrorquests', type: 'mission', prompt: 'Go through each other\'s "top 3" life lessons.', tags: ['wisdom', 'sharing', 'growth'] },
{ id: 'mq23', deckId: 'mirrorquests', type: 'mission', prompt: 'Write a list of qualities you admire in each other.', tags: ['appreciation', 'bonding', 'positive'] },
{ id: 'mq24', deckId: 'mirrorquests', type: 'mission', prompt: 'Go to a quiet library and each find a book that represents your current chapter in life.', tags: ['reflection', 'books', 'metaphor'] },
{ id: 'mq25', deckId: 'mirrorquests', type: 'mission', prompt: 'Talk about your biggest "turning point" in life while on a walk.', tags: ['reflection', 'growth', 'sharing'] },

// Bondquests
{ id: 'bq1', deckId: 'bondquests', type: 'mission', prompt: 'Go to a discount store and buy full outfits for each other under $20.', tags: ['shopping', 'fun', 'challenge'] },
{ id: 'bq2', deckId: 'bondquests', type: 'mission', prompt: 'Sing loudly in a public space (bonus if it\'s a duet).', tags: ['performance', 'bold', 'fun'] },
{ id: 'bq3', deckId: 'bondquests', type: 'mission', prompt: 'Ask a stranger to take a silly picture of you.', tags: ['photography', 'social', 'fun'] },
{ id: 'bq4', deckId: 'bondquests', type: 'mission', prompt: 'Do a random act of kindness for a stranger.', tags: ['kindness', 'giving', 'social'] },
{ id: 'bq5', deckId: 'bondquests', type: 'mission', prompt: 'Eat at a restaurant where you don\'t recognize anything on the menu.', tags: ['food', 'adventure', 'bold'] },
{ id: 'bq6', deckId: 'bondquests', type: 'mission', prompt: 'Take turns blindfolding each other while walking through a safe area.', tags: ['trust', 'adventure', 'bonding'] },
{ id: 'bq7', deckId: 'bondquests', type: 'mission', prompt: 'Do an open-mic night together (poetry, music, or comedy).', tags: ['performance', 'bold', 'creative'] },
{ id: 'bq8', deckId: 'bondquests', type: 'mission', prompt: 'Talk to someone new and ask them their life story.', tags: ['social', 'conversation', 'connection'] },
{ id: 'bq9', deckId: 'bondquests', type: 'mission', prompt: 'Spend an hour without your phones.', tags: ['connection', 'present', 'challenge'] },
{ id: 'bq10', deckId: 'bondquests', type: 'mission', prompt: 'Go to a crowded place and start a "mini dance circle."', tags: ['dance', 'bold', 'fun'] },
{ id: 'bq11', deckId: 'bondquests', type: 'mission', prompt: 'Order food for each other without knowing what it is.', tags: ['food', 'surprise', 'trust'] },
{ id: 'bq12', deckId: 'bondquests', type: 'mission', prompt: 'Introduce yourselves to a stranger as a "fake backstory couple or friends."', tags: ['social', 'creative', 'fun'] },
{ id: 'bq13', deckId: 'bondquests', type: 'mission', prompt: 'Spend $5 each at a thrift shop and swap gifts.', tags: ['shopping', 'gift', 'fun'] },
{ id: 'bq14', deckId: 'bondquests', type: 'mission', prompt: 'Ask a stranger to recommend their favorite local spot and go there.', tags: ['social', 'adventure', 'discovery'] },
{ id: 'bq15', deckId: 'bondquests', type: 'mission', prompt: 'Have a "no talking" communication challenge for 10 minutes.', tags: ['communication', 'challenge', 'fun'] },
{ id: 'bq16', deckId: 'bondquests', type: 'mission', prompt: 'Walk into a random event or meetup.', tags: ['social', 'spontaneous', 'adventure'] },
{ id: 'bq17', deckId: 'bondquests', type: 'mission', prompt: 'Each share your top 3 fears, then try a small action against one.', tags: ['vulnerability', 'courage', 'growth'] },
{ id: 'bq18', deckId: 'bondquests', type: 'mission', prompt: 'Pretend you\'re tourists in your own city.', tags: ['exploration', 'fun', 'perspective'] },
{ id: 'bq19', deckId: 'bondquests', type: 'mission', prompt: 'Go to a fancy store and try on clothes you\'d never buy.', tags: ['shopping', 'fun', 'playful'] },
{ id: 'bq20', deckId: 'bondquests', type: 'mission', prompt: 'Do an improv challenge in a public park.', tags: ['performance', 'creative', 'bold'] },
{ id: 'bq21', deckId: 'bondquests', type: 'mission', prompt: 'Go to a fast-food drive-thru and order in a funny accent.', tags: ['humor', 'bold', 'fun'] },
{ id: 'bq22', deckId: 'bondquests', type: 'mission', prompt: 'Try a "silent dinner" where you can only communicate by notes.', tags: ['communication', 'challenge', 'creative'] },
{ id: 'bq23', deckId: 'bondquests', type: 'mission', prompt: 'Swap phones and take random (safe) pictures on each other\'s camera rolls.', tags: ['photography', 'trust', 'fun'] },
{ id: 'bq24', deckId: 'bondquests', type: 'mission', prompt: 'Go to your ex\'s house (if safe) and write them a gratitude letter.', tags: ['healing', 'gratitude', 'closure'] },
{ id: 'bq25', deckId: 'bondquests', type: 'mission', prompt: 'End the night by writing one thing you appreciate about the other person.', tags: ['appreciation', 'bonding', 'gratitude'] },

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
