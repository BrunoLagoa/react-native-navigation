import { ReactNode } from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';

import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

export function DrawerSceneWrapper({ children }: { children: ReactNode }) {
  const process = useDrawerProgress();
  const animatedStyle = useAnimatedStyle<any>(() => {
    return {
      transform: [
        {
          scale: interpolate(
            process.value,
            [0, 1],
            [1, 0.8],
            Extrapolation.CLAMP
          ),
        },
        {
          translateX: interpolate(
            process.value,
            [0, 1],
            [0, 200],
            Extrapolation.CLAMP
          ),
        },
        {
          rotateY: interpolate(
            process.value,
            [0, 1],
            [0, -25],
            Extrapolation.CLAMP
          ) + 'deg',
        }
      ],
      borderRadius: 20,
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      {children}
    </Animated.View>
  );
}
