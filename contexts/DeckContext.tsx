
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { Card, Deck, getCardsForDeck } from '@/data/decks';
import { getFavorites, addFavorite as addFav, removeFavorite as removeFav } from '@/utils/storage';

interface DeckContextType {
  selectedDeck: Deck | null;
  selectDeck: (deck: Deck) => void;
  currentCard: Card | null;
  drawCard: () => void;
  shuffleDeck: () => void;
  remainingCards: number;
  totalCards: number;
  isDeckExhausted: boolean;
  favorites: string[];
  toggleFavorite: (cardId: string) => Promise<void>;
  isFavorite: (cardId: string) => boolean;
  refreshFavorites: () => Promise<void>;
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export function DeckProvider({ children }: { children: ReactNode }) {
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [deckCards, setDeckCards] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const deckCardsRef = useRef<Card[]>([]);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    const favs = await getFavorites();
    setFavorites(favs);
  }

  function shuffleCards(cards: Card[]): Card[] {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function selectDeck(deck: Deck) {
    setSelectedDeck(deck);
    const shuffled = shuffleCards(getCardsForDeck(deck.id));
    deckCardsRef.current = shuffled;
    currentIndexRef.current = 0;
    setDeckCards(shuffled);
    setCurrentIndex(0);
    setCurrentCard(null);
  }

  function drawCard() {
    if (!selectedDeck) return;

    let cards = deckCardsRef.current;
    if (cards.length === 0) {
      cards = shuffleCards(getCardsForDeck(selectedDeck.id));
      deckCardsRef.current = cards;
      setDeckCards(cards);
    }

    if (currentIndexRef.current >= cards.length) return;

    const nextCard = cards[currentIndexRef.current];
    currentIndexRef.current += 1;
    setCurrentCard(nextCard);
    setCurrentIndex(currentIndexRef.current);
  }

  function shuffleDeck() {
    if (!selectedDeck) return;

    const shuffled = shuffleCards(getCardsForDeck(selectedDeck.id));
    deckCardsRef.current = shuffled;
    currentIndexRef.current = 0;
    setDeckCards(shuffled);
    setCurrentIndex(0);
    setCurrentCard(null);
  }

  async function toggleFavorite(cardId: string) {
    if (favorites.includes(cardId)) {
      await removeFav(cardId);
      setFavorites(favorites.filter(id => id !== cardId));
    } else {
      await addFav(cardId);
      setFavorites([...favorites, cardId]);
    }
  }

  function isFavorite(cardId: string): boolean {
    return favorites.includes(cardId);
  }

  async function refreshFavorites() {
    await loadFavorites();
  }

  const totalCards = deckCards.length;
  const remainingCards = Math.max(totalCards - currentIndex, 0);
  const isDeckExhausted = totalCards > 0 && currentIndex >= totalCards;

  return (
    <DeckContext.Provider value={{
      selectedDeck,
      selectDeck,
      currentCard,
      drawCard,
      shuffleDeck,
      remainingCards,
      totalCards,
      isDeckExhausted,
      favorites,
      toggleFavorite,
      isFavorite,
      refreshFavorites,
    }}>
      {children}
    </DeckContext.Provider>
  );
}

export function useDeck() {
  const context = useContext(DeckContext);
  if (!context) {
    throw new Error('useDeck must be used within DeckProvider');
  }
  return context;
}
