
import React from 'react';
import { decks } from '@/data/decks';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { useThemeContext } from '@/contexts/ThemeContext';
import { useRouter } from 'expo-router';
import { useDeck } from '@/contexts/DeckContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 4,
  },
  deckSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  deckGrid: {
    gap: 12,
  },
  deckCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  deckHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  deckIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  deckName: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  deckDescription: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
  },
  deckCardCount: {
    fontSize: 12,
    opacity: 0.6,
  },
  quickActions: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default function HomeScreen() {
  const router = useRouter();
  const { selectDeck, selectedDeck } = useDeck();
  const { theme, currentColors } = useThemeContext();

  const handleDeckSelect = (deck: typeof decks[0]) => {
    selectDeck(deck.id);
    router.push('/(tabs)/draw');
  };

  const handleDailyCard = () => {
    router.push('/(tabs)/daily');
  };

  const handleShuffle = () => {
    if (selectedDeck) {
      router.push('/(tabs)/draw');
    }
  };

  const handleFavorites = () => {
    router.push('/(tabs)/favorites');
  };

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/645fca33-eb54-4257-af72-dbabda055c6d.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={[styles.title, { color: currentColors.text }]}>
            Where conversations become Magick
          </Text>
          <Text style={[styles.subtitle, { color: currentColors.text }]}>
            Connect with people through cards
          </Text>
          <Text style={[styles.subtitle, { color: currentColors.text }]}>
            Choose your deck
          </Text>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: currentColors.primary }]}
            onPress={handleDailyCard}
          >
            <IconSymbol
              ios_icon_name="calendar"
              android_material_icon_name="calendar-today"
              size={20}
              color="#fff"
            />
            <Text style={[styles.actionButtonText, { color: '#fff' }]}>
              Daily Card
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: currentColors.card }]}
            onPress={handleFavorites}
          >
            <IconSymbol
              ios_icon_name="heart.fill"
              android_material_icon_name="favorite"
              size={20}
              color={currentColors.primary}
            />
            <Text style={[styles.actionButtonText, { color: currentColors.text }]}>
              Favorites
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.deckSection}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>
            All Decks
          </Text>
          <View style={styles.deckGrid}>
            {decks.map((deck) => (
              <TouchableOpacity
                key={deck.id}
                style={[
                  styles.deckCard,
                  {
                    backgroundColor: currentColors.card,
                    borderWidth: selectedDeck === deck.id ? 2 : 0,
                    borderColor: currentColors.primary,
                  },
                ]}
                onPress={() => handleDeckSelect(deck)}
              >
                <View style={styles.deckHeader}>
                  <Text style={styles.deckIcon}>{deck.icon}</Text>
                  <Text style={[styles.deckName, { color: currentColors.text }]}>
                    {deck.displayName}
                  </Text>
                </View>
                <Text
                  style={[styles.deckDescription, { color: currentColors.text }]}
                >
                  {deck.description}
                </Text>
                <Text style={[styles.deckCardCount, { color: currentColors.text }]}>
                  {deck.cardCount} cards
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
