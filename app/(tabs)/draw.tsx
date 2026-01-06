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
  const { currentColors, theme } = useThemeContext();
  const { selectedDeck, currentCard, drawCard, toggleFavorite, isFavorite } = useDeck();
  const [isCardFavorite, setIsCardFavorite] = useState(false);

  const palette = {
    background: currentColors.background,
    surface: currentColors.card,
    text: currentColors.text,
    border: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#E6E2F0',
    primary: currentColors.primary,
    tagBackground: theme === 'dark' ? 'rgba(157, 78, 221, 0.2)' : '#EFE9FF',
    mutedIcon: theme === 'dark' ? currentColors.textSecondary : '#B9B5C9',
  };

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

  if (!selectedDeck || !currentCard) {
    return (
      <View style={[styles.container, { backgroundColor: palette.background }]}>
        <Text style={[styles.loadingText, { color: palette.text }]}>Loading...</Text>
      </View>
    );
  }

  const isQuestion = currentCard.type === 'question';
  const typeLabel = isQuestion ? 'QUESTION' : 'MISSION';
  const typeIcon = isQuestion ? 'help-outline' : 'flag';
  const typeIconIos = isQuestion ? 'questionmark.circle' : 'flag';

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.backButton, { backgroundColor: palette.surface, borderColor: palette.border }]}
          >
            <IconSymbol
              ios_icon_name="chevron.left"
              android_material_icon_name="arrow-back"
              size={20}
              color={palette.text}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: palette.text }]}>Your Card</Text>
          <View style={{ width: 36 }} />
        </View>

        <View style={styles.cardContainer}>
          <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
            <View style={styles.cardHeaderRow}>
              <View style={styles.typeRow}>
                <View style={[styles.typeIconWrap, { backgroundColor: palette.tagBackground }]}>
                  <IconSymbol
                    ios_icon_name={typeIconIos}
                    android_material_icon_name={typeIcon}
                    size={14}
                    color={palette.primary}
                  />
                </View>
                <Text style={[styles.typeLabel, { color: palette.primary }]}>{typeLabel}</Text>
              </View>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={handleFavoriteToggle}
              >
                <IconSymbol
                  ios_icon_name={isCardFavorite ? 'heart.fill' : 'heart'}
                  android_material_icon_name={isCardFavorite ? 'favorite' : 'favorite-border'}
                  size={20}
                  color={isCardFavorite ? palette.primary : palette.mutedIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.typeDivider, { backgroundColor: palette.primary }]} />

            <View style={styles.cardContent}>
              <Text style={[styles.cardPrompt, { color: palette.text }]}>
                {currentCard.prompt}
              </Text>

              {currentCard.tags && currentCard.tags.length > 0 && (
                <View style={styles.tagsContainer}>
                  {currentCard.tags.map((tag, index) => (
                    <View
                      key={index}
                      style={[styles.tag, { backgroundColor: palette.tagBackground }]}
                    >
                      <Text style={[styles.tagText, { color: palette.primary }]}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.primaryButton, { backgroundColor: palette.primary }]}
            onPress={handleDrawAnother}
          >
            <Text style={styles.primaryButtonText}>Draw Another Card</Text>
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
    paddingTop: Platform.OS === 'android' ? 40 : 56,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  cardContainer: {
    marginBottom: 24,
  },
  card: {
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    minHeight: 280,
    boxShadow: '0px 10px 24px rgba(27, 19, 57, 0.08)',
    elevation: 3,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  typeIconWrap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  favoriteButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeDivider: {
    height: 1,
    marginTop: 12,
    marginBottom: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardPrompt: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  actions: {
    marginTop: 4,
  },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 12px 20px rgba(93, 40, 216, 0.25)',
    elevation: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 120,
  },
});
