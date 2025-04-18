import analytics from "@react-native-firebase/analytics";

export default {
  analytics: () => ({
    logScreenView: (params: {
      firebase_screen: string;
      firebase_screen_class: string;
      [key: string]: any;
    }) => analytics().logScreenView(params),

    setAnalyticsCollectionEnabled: (enabled: boolean) =>
      analytics().setAnalyticsCollectionEnabled(enabled),

    logEvent: (event: string, params?: Record<string, any>) =>
      analytics().logEvent(event, params),
  }),
};
