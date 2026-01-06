
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeContext } from '@/contexts/ThemeContext';
import { useDeck } from '@/contexts/DeckContext';
import { decks, getDailyCard } from '@/data/decks';
import { IconSymbol } from '@/components/IconSymbol';

export default function HomeScreen() {
  const router = useRouter();
  const { currentColors } = useThemeContext();
  const { selectDeck } = useDeck();

  function handleDeckSelect(deck: typeof decks[0]) {
    selectDeck(deck);
    router.push('/(tabs)/draw');
  }

  function handleDailyCard() {
    router.push('/(tabs)/daily');
  }

  function handleShuffle() {
    // Navigate to draw screen and shuffle will happen there
    router.push('/(tabs)/draw');
  }

  function handleFavorites() {
    router.push('/(tabs)/favorites');
  }

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={[styles.logoEmoji, { color: currentColors.primary }]}>🔮</Text>
          </View>
          <Text style={[styles.title, { color: currentColors.text }]}>Magick!</Text>
          <Text style={[styles.subtitle, { color: currentColors.accent }]}>
            ICEBREAKER QUESTIONS & MISSIONS
          </Text>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.quickActionButton, { backgroundColor: currentColors.primary }]}
            onPress={handleShuffle}
          >
            <IconSymbol
              ios_icon_name="shuffle"
              android_material_icon_name="shuffle"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.quickActionText}>Shuffle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickActionButton, { backgroundColor: currentColors.secondary }]}
            onPress={handleDailyCard}
          >
            <IconSymbol
              ios_icon_name="calendar"
              android_material_icon_name="calendar-today"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.quickActionText}>Daily</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.quickActionButton, { backgroundColor: currentColors.highlight }]}
            onPress={handleFavorites}
          >
            <IconSymbol
              ios_icon_name="heart.fill"
              android_material_icon_name="favorite"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.quickActionText}>Favorites</Text>
          </TouchableOpacity>
        </View>

        {/* Deck Grid */}
        <View style={styles.deckSection}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            Choose Your Deck
          </Text>
          <View style={styles.deckGrid}>
            {decks.map((deck, index) => (
              <TouchableOpacity
                key={deck.id}
                style={[
                  styles.deckCard,
                  { backgroundColor: currentColors.card },
                ]}
                onPress={() => handleDeckSelect(deck)}
              >
                <Text style={styles.deckEmoji}>{deck.icon}</Text>
                <Text style={[styles.deckName, { color: currentColors.text }]}>
                  {deck.displayName}
                </Text>
                <Text style={[styles.deckDescription, { color: currentColors.textSecondary }]}>
                  {deck.description}
                </Text>
                <Text style={[styles.deckCardCount, { color: currentColors.accent }]}>
                  {deck.cardCount} cards
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bottom Padding */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'android' ? 48 : 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoContainer: {
    marginBottom: 12,
  },
  logoEmoji: {
    fontSize: 64,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 12,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  quickActionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  deckSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  deckGrid: {
    gap: 16,
  },
  deckCard: {
    borderRadius: 20,
    padding: 20,
    boxShadow: '0px 4px 12px rgba(157, 78, 221, 0.2)',
    elevation: 4,
  },
  deckEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  deckName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  deckDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  deckCardCount: {
    fontSize: 12,
    fontWeight: '600',
  },
});
