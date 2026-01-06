
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@magick_favorites';
const THEME_KEY = '@magick_theme';

// Favorites management
export async function getFavorites(): Promise<string[]> {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITES_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
}

export async function addFavorite(cardId: string): Promise<void> {
  try {
    const favorites = await getFavorites();
    if (!favorites.includes(cardId)) {
      favorites.push(cardId);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('Error adding favorite:', error);
  }
}

export async function removeFavorite(cardId: string): Promise<void> {
  try {
    const favorites = await getFavorites();
    const filtered = favorites.filter(id => id !== cardId);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
}

export async function isFavorite(cardId: string): Promise<boolean> {
  try {
    const favorites = await getFavorites();
    return favorites.includes(cardId);
  } catch (error) {
    console.error('Error checking favorite:', error);
    return false;
  }
}

export async function clearFavorites(): Promise<void> {
  try {
    await AsyncStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.error('Error clearing favorites:', error);
  }
}

// Theme management
export async function getTheme(): Promise<'light' | 'dark'> {
  try {
    const theme = await AsyncStorage.getItem(THEME_KEY);
    return (theme as 'light' | 'dark') || 'dark';
  } catch (error) {
    console.error('Error loading theme:', error);
    return 'dark';
  }
}

export async function setTheme(theme: 'light' | 'dark'): Promise<void> {
  try {
    await AsyncStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error('Error saving theme:', error);
  }
}
