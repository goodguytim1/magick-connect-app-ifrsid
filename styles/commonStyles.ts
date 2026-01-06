
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Magick App - Mystical Dark Theme
export const colors = {
  // Dark Theme (Default)
  background: '#0A0A14',
  card: '#1A1A2E',
  text: '#FFFFFF',
  textSecondary: '#A0A0B8',
  primary: '#9D4EDD',
  secondary: '#7B2CBF',
  accent: '#FFB627',
  highlight: '#FF006E',
  
  // Light Theme Alternative
  backgroundLight: '#F8F7FF',
  cardLight: '#FFFFFF',
  textLight: '#1A1A2E',
  textSecondaryLight: '#6B6B8C',
  primaryLight: '#7B2CBF',
  accentLight: '#FFB627',
};

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondary: {
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 4px 12px rgba(157, 78, 221, 0.2)',
    elevation: 4,
  },
  deckCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    marginVertical: 12,
    width: '100%',
    boxShadow: '0px 6px 16px rgba(157, 78, 221, 0.3)',
    elevation: 6,
  },
});
