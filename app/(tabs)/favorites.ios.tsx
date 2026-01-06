
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { useThemeContext } from '@/contexts/ThemeContext';
import { useDeck } from '@/contexts/DeckContext';
import { cards, Card } from '@/data/decks';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function FavoritesScreen() {
  const { currentColors } = useThemeContext();
  const { favorites, toggleFavorite, refreshFavorites } = useDeck();
  const [favoriteCards, setFavoriteCards] = useState<Card[]>([]);

  useEffect(() => {
    loadFavoriteCards();
  }, [favorites]);

  function loadFavoriteCards() {
    const favCards = cards.filter(card => favorites.includes(card.id));
    setFavoriteCards(favCards);
  }

  async function handleRemoveFavorite(cardId: string) {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await toggleFavorite(cardId);
    await refreshFavorites();
  }

  function handleCardPress(card: Card) {
    Alert.alert(
      card.type === 'question' ? 'Question' : 'Mission',
      card.prompt,
      [
        {
          text: 'Remove from Favorites',
          style: 'destructive',
          onPress: () => handleRemoveFavorite(card.id),
        },
        {
          text: 'Close',
          style: 'cancel',
        },
      ]
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol
            ios_icon_name="heart.fill"
            android_material_icon_name="favorite"
            size={32}
            color={currentColors.highlight}
          />
          <Text style={[styles.title, { color: currentColors.text }]}>Favorites</Text>
          <Text style={[styles.subtitle, { color: currentColors.textSecondary }]}>
            {favoriteCards.length} saved {favoriteCards.length === 1 ? 'card' : 'cards'}
          </Text>
        </View>

        {/* Favorites List */}
        {favoriteCards.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={[styles.emptyEmoji, { color: currentColors.textSecondary }]}>💫</Text>
            <Text style={[styles.emptyText, { color: currentColors.textSecondary }]}>
              No favorites yet
            </Text>
            <Text style={[styles.emptySubtext, { color: currentColors.textSecondary }]}>
              Tap the heart icon on any card to save it here
            </Text>
          </View>
        ) : (
          <View style={styles.cardsList}>
            {favoriteCards.map((card, index) => (
              <TouchableOpacity
                key={card.id}
                style={[styles.favoriteCard, { backgroundColor: currentColors.card }]}
                onPress={() => handleCardPress(card)}
              >
                <View style={styles.cardHeader}>
                  <View style={[
                    styles.cardTypeBadge,
                    { backgroundColor: card.type === 'question' ? currentColors.primary : currentColors.accent }
                  ]}>
                    <Text style={styles.cardTypeBadgeText}>
                      {card.type === 'question' ? '❓' : '🎯'}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleRemoveFavorite(card.id)}
                    style={styles.removeButton}
                  >
                    <IconSymbol
                      ios_icon_name="heart.fill"
                      android_material_icon_name="favorite"
                      size={24}
                      color={currentColors.highlight}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={[styles.cardPrompt, { color: currentColors.text }]}>
                  {card.prompt}
                </Text>
                {card.tags && card.tags.length > 0 && (
                  <View style={styles.tagsContainer}>
                    {card.tags.slice(0, 3).map((tag, tagIndex) => (
                      <View
                        key={tagIndex}
                        style={[styles.tag, { backgroundColor: currentColors.primary + '30' }]}
                      >
                        <Text style={[styles.tagText, { color: currentColors.primary }]}>
                          {tag}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}

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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 12,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 80,
    paddingHorizontal: 40,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  cardsList: {
    gap: 16,
  },
  favoriteCard: {
    borderRadius: 20,
    padding: 20,
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTypeBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTypeBadgeText: {
    fontSize: 18,
  },
  removeButton: {
    padding: 4,
  },
  cardPrompt: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
