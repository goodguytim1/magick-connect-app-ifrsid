
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Card, Deck, decks, getCardsForDeck, getRandomCard } from '@/data/decks';
import { getFavorites, addFavorite as addFav, removeFavorite as removeFav } from '@/utils/storage';

interface DeckContextType {
  selectedDeck: Deck | null;
  selectDeck: (deck: Deck) => void;
  currentCard: Card | null;
  drawCard: () => void;
  shuffleDeck: () => void;
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

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    const favs = await getFavorites();
    setFavorites(favs);
  }

  function selectDeck(deck: Deck) {
    setSelectedDeck(deck);
    const cards = getCardsForDeck(deck.id);
    setDeckCards(cards);
    setCurrentIndex(0);
    if (cards.length > 0) {
      setCurrentCard(cards[0]);
    }
  }

  function drawCard() {
    if (!selectedDeck) return;
    
    const card = getRandomCard(selectedDeck.id);
    setCurrentCard(card);
  }

  function shuffleDeck() {
    if (deckCards.length === 0) return;
    
    const shuffled = [...deckCards].sort(() => Math.random() - 0.5);
    setDeckCards(shuffled);
    setCurrentIndex(0);
    setCurrentCard(shuffled[0]);
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

  return (
    <DeckContext.Provider value={{
      selectedDeck,
      selectDeck,
      currentCard,
      drawCard,
      shuffleDeck,
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
