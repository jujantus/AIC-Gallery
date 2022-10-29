import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {WithSplashScreen} from './src/components/splashScreen/SplashScreen';

import {RootNavigator} from './src/navigation/RootNavigator';
import {store} from './src/state/store';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAppReady(true);
      clearTimeout(timeout);
    }, 1000);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </WithSplashScreen>
  );
};

export default App;
