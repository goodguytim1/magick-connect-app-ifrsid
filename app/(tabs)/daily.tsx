
import React, { useState, useEffect } from 'react';
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
import { getDailyCard } from '@/data/decks';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function DailyCardScreen() {
  const router = useRouter();
  const { currentColors } = useThemeContext();
  const { toggleFavorite, isFavorite } = useDeck();
  const dailyCard = getDailyCard();
  const [isCardFavorite, setIsCardFavorite] = useState(false);

  useEffect(() => {
    setIsCardFavorite(isFavorite(dailyCard.id));
  }, [dailyCard]);

  async function handleFavoriteToggle() {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    await toggleFavorite(dailyCard.id);
    setIsCardFavorite(!isCardFavorite);
  }

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
          <Text style={[styles.headerTitle, { color: currentColors.text }]}>Daily Card</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Date Display */}
        <View style={styles.dateContainer}>
          <IconSymbol
            ios_icon_name="calendar"
            android_material_icon_name="calendar-today"
            size={28}
            color={currentColors.accent}
          />
          <Text style={[styles.dateText, { color: currentColors.textSecondary }]}>
            {dateString}
          </Text>
        </View>

        {/* Daily Card */}
        <View style={styles.cardContainer}>
          <View style={[styles.card, { backgroundColor: currentColors.card }]}>
            {/* Card Type Badge */}
            <View style={[
              styles.typeBadge,
              { backgroundColor: dailyCard.type === 'question' ? currentColors.primary : currentColors.accent }
            ]}>
              <Text style={styles.typeBadgeText}>
                {dailyCard.type === 'question' ? '❓ QUESTION' : '🎯 MISSION'}
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
                {dailyCard.prompt}
              </Text>

              {/* Tags */}
              {dailyCard.tags && dailyCard.tags.length > 0 && (
                <View style={styles.tagsContainer}>
                  {dailyCard.tags.map((tag, index) => (
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

        {/* Info Text */}
        <View style={styles.infoContainer}>
          <Text style={[styles.infoText, { color: currentColors.textSecondary }]}>
            ✨ This is your daily card. Everyone sees the same card today!
          </Text>
          <Text style={[styles.infoText, { color: currentColors.textSecondary }]}>
            Come back tomorrow for a new one.
          </Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 32,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardContainer: {
    marginBottom: 24,
  },
  card: {
    borderRadius: 24,
    padding: 32,
    minHeight: 400,
    boxShadow: '0px 8px 24px rgba(157, 78, 221, 0.3)',
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
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 8,
  },
});
