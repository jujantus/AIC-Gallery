import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {style} from './splashScreen.style';

export const WithSplashScreen = ({
  children,
  isAppReady,
}: {
  isAppReady: boolean;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isAppReady && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
};

const LOADING_IMAGE = 'Loading image';
const FADE_IN_IMAGE = 'Fade in image';
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

export const Splash = ({isAppReady}: {isAppReady: boolean}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;

  const [status, setStatus] = useState<
    | typeof LOADING_IMAGE
    | typeof FADE_IN_IMAGE
    | typeof WAIT_FOR_APP_TO_BE_READY
    | typeof FADE_OUT
    | typeof HIDDEN
  >(LOADING_IMAGE);

  useEffect(() => {
    if (status === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setStatus(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [imageOpacity, status]);

  useEffect(() => {
    if (status === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setStatus(FADE_OUT);
      }
    }
  }, [isAppReady, status]);

  useEffect(() => {
    if (status === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }).start(() => {
        setStatus(HIDDEN);
      });
    }
  }, [containerOpacity, status]);

  if (status === HIDDEN) {
    return null;
  }

  return (
    <Animated.View
      collapsable={false}
      style={[style.container, {opacity: containerOpacity}]}>
      <Animated.Image
        source={require('../../assets/ArtInstituteOfChicago.png')}
        fadeDuration={0}
        onLoad={() => {
          setStatus(FADE_IN_IMAGE);
        }}
        style={[style.image, {opacity: imageOpacity}]}
        resizeMode="contain"
      />
    </Animated.View>
  );
};
