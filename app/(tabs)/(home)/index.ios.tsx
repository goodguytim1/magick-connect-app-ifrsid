
import { decks } from '@/data/decks';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { useDeck } from '@/contexts/DeckContext';
import { IconSymbol } from '@/components/IconSymbol';
import { useThemeContext } from '@/contexts/ThemeContext';
import React from 'react';

export default function HomeScreen() {
  const { theme } = useThemeContext();
  const router = useRouter();
  const { selectedDeck, setSelectedDeck, drawCard } = useDeck();

  const handleDeckSelect = (deck: typeof decks[0]) => {
    setSelectedDeck(deck.id);
  };

  const handleDailyCard = () => {
    router.push('/(tabs)/daily');
  };

  const handleShuffle = () => {
    if (selectedDeck) {
      drawCard();
      router.push('/(tabs)/draw');
    }
  };

  const handleFavorites = () => {
    router.push('/(tabs)/favorites');
  };

  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/f03d2cac-84d0-4003-9c9c-5f6ecb15467d.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Tagline */}
        <Text style={[styles.tagline, { color: isDark ? '#fff' : '#000' }]}>
          Where conversations become Magick
        </Text>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5' }]}
            onPress={handleDailyCard}
          >
            <IconSymbol name="calendar" size={24} color={isDark ? '#fff' : '#000'} />
            <Text style={[styles.actionText, { color: isDark ? '#fff' : '#000' }]}>
              Daily Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5' }]}
            onPress={handleFavorites}
          >
            <IconSymbol name="heart.fill" size={24} color={isDark ? '#fff' : '#000'} />
            <Text style={[styles.actionText, { color: isDark ? '#fff' : '#000' }]}>
              Favorites
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5' }]}
            onPress={handleShuffle}
            disabled={!selectedDeck}
          >
            <IconSymbol name="shuffle" size={24} color={selectedDeck ? (isDark ? '#fff' : '#000') : '#999'} />
            <Text style={[styles.actionText, { color: selectedDeck ? (isDark ? '#fff' : '#000') : '#999' }]}>
              Shuffle
            </Text>
          </TouchableOpacity>
        </View>

        {/* Subtitle above deck selector */}
        <Text style={[styles.subtitle, { color: isDark ? '#aaa' : '#666' }]}>
          Connect with people through cards
        </Text>

        {/* Deck Selector */}
        <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#000' }]}>
          Choose your deck
        </Text>

        <View style={styles.deckGrid}>
          {decks.map((deck) => (
            <TouchableOpacity
              key={deck.id}
              style={[
                styles.deckCard,
                {
                  backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                  borderColor: selectedDeck === deck.id ? deck.color : 'transparent',
                  borderWidth: selectedDeck === deck.id ? 2 : 0,
                },
              ]}
              onPress={() => handleDeckSelect(deck)}
            >
              <Text style={styles.deckIcon}>{deck.icon}</Text>
              <Text style={[styles.deckName, { color: isDark ? '#fff' : '#000' }]}>
                {deck.displayName}
              </Text>
              <Text style={[styles.deckDescription, { color: isDark ? '#aaa' : '#666' }]}>
                {deck.description}
              </Text>
              <Text style={[styles.cardCount, { color: isDark ? '#888' : '#999' }]}>
                {deck.cardCount} cards
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Draw Card Button */}
        {selectedDeck && (
          <TouchableOpacity
            style={[styles.drawButton, { backgroundColor: decks.find(d => d.id === selectedDeck)?.color || '#8B5CF6' }]}
            onPress={handleShuffle}
          >
            <Text style={styles.drawButtonText}>Draw Card</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  logo: {
    width: 120,
    height: 120,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  deckGrid: {
    gap: 12,
  },
  deckCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  deckIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  deckName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  deckDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardCount: {
    fontSize: 12,
  },
  drawButton: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  drawButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
