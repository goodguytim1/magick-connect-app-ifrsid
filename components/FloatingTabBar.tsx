
import { Href } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import React from 'react';
import { BlurView } from 'expo-blur';
import { IconSymbol } from '@/components/IconSymbol';
import { useThemeContext } from '@/contexts/ThemeContext';

export interface TabBarItem {
  name: string;
  route: Href;
  icon: string;
  label: string;
}

interface FloatingTabBarProps {
  tabs: TabBarItem[];
  containerWidth?: number;
  borderRadius?: number;
  bottomMargin?: number;
}

export default function FloatingTabBar({
  tabs,
  containerWidth = Dimensions.get('window').width - 40,
  borderRadius = 25,
  bottomMargin = 20,
}: FloatingTabBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { currentColors } = useThemeContext();

  const activeIndex = tabs.findIndex((tab) => {
    if (tab.name === '(home)') {
      return pathname === '/' || pathname.startsWith('/(tabs)/(home)');
    }
    return pathname.includes(`/${tab.name}`);
  });

  const translateX = useSharedValue(0);

  React.useEffect(() => {
    if (activeIndex !== -1) {
      translateX.value = withSpring(activeIndex * (containerWidth / tabs.length), {
        damping: 20,
        stiffness: 90,
      });
    }
  }, [activeIndex, containerWidth, tabs.length]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: containerWidth / tabs.length,
  }));

  function handleTabPress(route: Href) {
    router.push(route);
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[
        styles.safeArea,
        {
          bottom: bottomMargin,
        },
      ]}
    >
      <BlurView
        intensity={80}
        tint="dark"
        style={[
          styles.container,
          {
            width: containerWidth,
            borderRadius: borderRadius,
            backgroundColor: currentColors.card + 'CC',
          },
        ]}
      >
        <Animated.View
          style={[
            styles.indicator,
            indicatorStyle,
            {
              backgroundColor: currentColors.primary,
              borderRadius: borderRadius - 5,
            },
          ]}
        />
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <TouchableOpacity
              key={tab.name}
              style={styles.tab}
              onPress={() => handleTabPress(tab.route)}
            >
              <IconSymbol
                ios_icon_name={tab.icon}
                android_material_icon_name={tab.icon}
                size={24}
                color={isActive ? '#FFFFFF' : currentColors.textSecondary}
              />
              <Text
                style={[
                  styles.label,
                  {
                    color: isActive ? '#FFFFFF' : currentColors.textSecondary,
                  },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 100,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 8,
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
    elevation: 10,
    overflow: 'hidden',
  },
  indicator: {
    position: 'absolute',
    height: '80%',
    top: '10%',
    left: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    zIndex: 1,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
  },
});
