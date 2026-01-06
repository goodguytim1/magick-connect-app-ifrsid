
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeContext } from '@/contexts/ThemeContext';
import { useDeck } from '@/contexts/DeckContext';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function DrawScreen() {
  const router = useRouter();
  const { currentColors } = useThemeContext();
  const { selectedDeck, currentCard, drawCard, shuffleDeck, toggleFavorite, isFavorite } = useDeck();
  const [isCardFavorite, setIsCardFavorite] = useState(false);

  useEffect(() => {
    if (!selectedDeck) {
      router.replace('/(tabs)/(home)/');
    } else if (!currentCard) {
      drawCard();
    }
  }, [selectedDeck]);

  useEffect(() => {
    if (currentCard) {
      setIsCardFavorite(isFavorite(currentCard.id));
    }
  }, [currentCard]);

  async function handleFavoriteToggle() {
    if (!currentCard) return;
    
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await toggleFavorite(currentCard.id);
    setIsCardFavorite(!isCardFavorite);
  }

  function handleDrawAnother() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    drawCard();
  }

  function handleShuffle() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    shuffleDeck();
  }

  if (!selectedDeck || !currentCard) {
    return (
      <View style={[styles.container, { backgroundColor: currentColors.background }]}>
        <Text style={[styles.loadingText, { color: currentColors.text }]}>Loading...</Text>
      </View>
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
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol
              ios_icon_name="chevron.left"
              android_material_icon_name="arrow-back"
              size={24}
              color={currentColors.text}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: currentColors.text }]}>Your Card</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Card Display */}
        <View style={styles.cardContainer}>
          <View style={[styles.card, { backgroundColor: currentColors.card }]}>
            {/* Card Type Badge */}
            <View style={[
              styles.typeBadge,
              { backgroundColor: currentCard.type === 'question' ? currentColors.primary : currentColors.accent }
            ]}>
              <Text style={styles.typeBadgeText}>
                {currentCard.type === 'question' ? '❓ QUESTION' : '🎯 MISSION'}
              </Text>
            </View>

            {/* Favorite Button */}
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={handleFavoriteToggle}
            >
              <IconSymbol
                ios_icon_name={isCardFavorite ? "heart.fill" : "heart"}
                android_material_icon_name={isCardFavorite ? "favorite" : "favorite-border"}
                size={28}
                color={isCardFavorite ? currentColors.highlight : currentColors.textSecondary}
              />
            </TouchableOpacity>

            {/* Card Content */}
            <View style={styles.cardContent}>
              <Text style={[styles.cardPrompt, { color: currentColors.text }]}>
                {currentCard.prompt}
              </Text>

              {/* Tags */}
              {currentCard.tags && currentCard.tags.length > 0 && (
                <View style={styles.tagsContainer}>
                  {currentCard.tags.map((tag, index) => (
                    <View
                      key={index}
                      style={[styles.tag, { backgroundColor: currentColors.primary + '30' }]}
                    >
                      <Text style={[styles.tagText, { color: currentColors.primary }]}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: currentColors.primary }]}
            onPress={handleDrawAnother}
          >
            <Text style={styles.primaryButtonText}>Draw Another Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryButton, { borderColor: currentColors.primary }]}
            onPress={handleShuffle}
          >
            <IconSymbol
              ios_icon_name="shuffle"
              android_material_icon_name="shuffle"
              size={20}
              color={currentColors.primary}
            />
            <Text style={[styles.secondaryButtonText, { color: currentColors.primary }]}>
              Shuffle Deck
            </Text>
          </TouchableOpacity>
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
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  cardContainer: {
    marginBottom: 32,
  },
  card: {
    borderRadius: 24,
    padding: 32,
    minHeight: 400,
    shadowColor: '#9D4EDD',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 8,
  },
  typeBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 24,
  },
  typeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  favoriteButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardPrompt: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    textAlign: 'center',
    marginBottom: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  actions: {
    gap: 16,
  },
  primaryButton: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryButton: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
});
