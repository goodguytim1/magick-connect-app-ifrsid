
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Switch,
  Alert,
} from 'react-native';
import { useThemeContext } from '@/contexts/ThemeContext';
import { clearFavorites } from '@/utils/storage';
import { useDeck } from '@/contexts/DeckContext';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function SettingsScreen() {
  const { currentColors, theme, toggleTheme } = useThemeContext();
  const { refreshFavorites } = useDeck();

  async function handleToggleTheme() {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleTheme();
  }

  function handleResetFavorites() {
    Alert.alert(
      'Reset Favorites',
      'Are you sure you want to remove all favorited cards? This cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            await clearFavorites();
            await refreshFavorites();
            Alert.alert('Success', 'All favorites have been cleared.');
          },
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
            ios_icon_name="gear"
            android_material_icon_name="settings"
            size={32}
            color={currentColors.primary}
          />
          <Text style={[styles.title, { color: currentColors.text }]}>Settings</Text>
        </View>

        {/* Theme Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>Appearance</Text>
          <View style={[styles.settingCard, { backgroundColor: currentColors.card }]}>
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <IconSymbol
                  ios_icon_name={theme === 'dark' ? 'moon.fill' : 'sun.max.fill'}
                  android_material_icon_name={theme === 'dark' ? 'nightlight' : 'wb-sunny'}
                  size={24}
                  color={currentColors.primary}
                />
                <View style={styles.settingText}>
                  <Text style={[styles.settingLabel, { color: currentColors.text }]}>
                    Dark Mode
                  </Text>
                  <Text style={[styles.settingDescription, { color: currentColors.textSecondary }]}>
                    {theme === 'dark' ? 'Enabled' : 'Disabled'}
                  </Text>
                </View>
              </View>
              <Switch
                value={theme === 'dark'}
                onValueChange={handleToggleTheme}
                trackColor={{ false: '#767577', true: currentColors.primary }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Data Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>Data</Text>
          <TouchableOpacity
            style={[styles.settingCard, { backgroundColor: currentColors.card }]}
            onPress={handleResetFavorites}
          >
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <IconSymbol
                  ios_icon_name="trash"
                  android_material_icon_name="delete"
                  size={24}
                  color={currentColors.highlight}
                />
                <View style={styles.settingText}>
                  <Text style={[styles.settingLabel, { color: currentColors.text }]}>
                    Reset Favorites
                  </Text>
                  <Text style={[styles.settingDescription, { color: currentColors.textSecondary }]}>
                    Clear all favorited cards
                  </Text>
                </View>
              </View>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="chevron-right"
                size={20}
                color={currentColors.textSecondary}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>About</Text>
          <View style={[styles.settingCard, { backgroundColor: currentColors.card }]}>
            <View style={styles.aboutContent}>
              <Text style={[styles.appName, { color: currentColors.text }]}>Magick</Text>
              <Text style={[styles.appVersion, { color: currentColors.textSecondary }]}>
                Version 1.0.0
              </Text>
              <Text style={[styles.appDescription, { color: currentColors.textSecondary }]}>
                Where conversations become Magick
              </Text>
              <View style={styles.logoContainer}>
                <Text style={styles.logoEmoji}>🔮</Text>
              </View>
            </View>
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
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 12,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  settingCard: {
    borderRadius: 16,
    padding: 20,
    boxShadow: '0px 4px 12px rgba(157, 78, 221, 0.2)',
    elevation: 4,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  settingText: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 13,
  },
  aboutContent: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  appName: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  appVersion: {
    fontSize: 14,
    marginBottom: 12,
  },
  appDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    marginTop: 8,
  },
  logoEmoji: {
    fontSize: 48,
  },
});
