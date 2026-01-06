import React from 'react';
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
import { decks } from '@/data/decks';
import { IconSymbol } from '@/components/IconSymbol';

export default function HomeScreen() {
  const router = useRouter();
  const { currentColors, theme } = useThemeContext();
  const { selectDeck, selectedDeck, drawCard } = useDeck();

  const palette = {
    background: currentColors.background,
    surface: currentColors.card,
    text: currentColors.text,
    textSecondary: currentColors.textSecondary,
    textMuted: currentColors.textSecondary,
    border: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E6E2F0',
    primary: currentColors.primary,
  };

  function handleDeckSelect(deck: typeof decks[0]) {
    selectDeck(deck);
  }

  function handleDrawCard() {
    if (!selectedDeck) {
      selectDeck(decks[0]);
    } else {
      drawCard();
    }
    router.push('/(tabs)/draw');
  }

  function handleDailyCard() {
    router.push('/(tabs)/daily');
  }

  function handleShuffle() {
    if (selectedDeck) {
      drawCard();
    }
    router.push('/(tabs)/draw');
  }

  function handleFavorites() {
    router.push('/(tabs)/favorites');
  }

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <Image
              source={require('../../../assets/images/645fca33-eb54-4257-af72-dbabda055c6d.png')}
              style={styles.brandLogo}
              resizeMode="contain"
            />
            <Text style={[styles.brandTitle, { color: palette.text }]}>Magick</Text>
          </View>
          <Text style={[styles.tagline, { color: palette.textSecondary }]}>
            Where conversations become Magick
          </Text>
        </View>

        <Text style={[styles.sectionTitle, { color: palette.text }]}>Choose Your Deck</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.deckScrollContent}
        >
          {decks.map((deck) => {
            const isSelected = selectedDeck?.id === deck.id;
            return (
              <TouchableOpacity
                key={deck.id}
                style={[
                  styles.deckCard,
                  {
                    backgroundColor: palette.surface,
                    borderColor: isSelected ? palette.primary : palette.border,
                  },
                ]}
                onPress={() => handleDeckSelect(deck)}
              >
                <View
                  style={[
                    styles.deckIconWrap,
                    { backgroundColor: `${deck.color}1A` },
                  ]}
                >
                  <Text style={[styles.deckIconText, { color: deck.color }]}>
                    {deck.icon}
                  </Text>
                </View>
                <Text style={[styles.deckName, { color: palette.text }]}>
                  {deck.displayName}
                </Text>
                <Text style={[styles.deckDescription, { color: palette.textSecondary }]}>
                  {deck.description}
                </Text>
                <Text style={[styles.deckCardCount, { color: deck.color }]}>
                  {deck.cardCount} cards
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <Text style={[styles.helperText, { color: palette.textMuted }]}>
          Connect with people through cards
        </Text>

        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: palette.primary }]}
          onPress={handleDrawCard}
        >
          <IconSymbol
            ios_icon_name="sparkles"
            android_material_icon_name="auto-awesome"
            size={18}
            color="#FFFFFF"
          />
          <Text style={styles.primaryButtonText}>Draw Card</Text>
        </TouchableOpacity>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[
              styles.quickActionButton,
              { backgroundColor: palette.surface, borderColor: palette.border },
            ]}
            onPress={handleShuffle}
          >
            <IconSymbol
              ios_icon_name="shuffle"
              android_material_icon_name="shuffle"
              size={16}
              color={palette.primary}
            />
            <Text style={[styles.quickActionText, { color: palette.text }]}>Shuffle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.quickActionButton,
              { backgroundColor: palette.surface, borderColor: palette.border },
            ]}
            onPress={handleDailyCard}
          >
            <IconSymbol
              ios_icon_name="calendar"
              android_material_icon_name="calendar-today"
              size={16}
              color={currentColors.secondary}
            />
            <Text style={[styles.quickActionText, { color: palette.text }]}>Daily</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.quickActionButton,
              { backgroundColor: palette.surface, borderColor: palette.border },
            ]}
            onPress={handleFavorites}
          >
            <IconSymbol
              ios_icon_name="heart.fill"
              android_material_icon_name="favorite"
              size={16}
              color={currentColors.highlight}
            />
            <Text style={[styles.quickActionText, { color: palette.text }]}>Favorites</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'android' ? 44 : 60,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  header: {
    marginBottom: 20,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  brandLogo: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  brandTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  tagline: {
    fontSize: 13,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  deckScrollContent: {
    paddingVertical: 4,
    paddingRight: 20,
    gap: 16,
  },
  deckCard: {
    width: 220,
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    shadowColor: '#1B1339',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 3,
  },
  deckIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  deckIconText: {
    fontSize: 18,
    fontWeight: '700',
  },
  deckName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  deckDescription: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
  },
  deckCardCount: {
    fontSize: 12,
    fontWeight: '700',
  },
  helperText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
    shadowColor: '#5D28D8',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    gap: 10,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    gap: 6,
    shadowColor: '#1B1339',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 2,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
