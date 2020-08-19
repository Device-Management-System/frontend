import ReactGA from 'react-ga';

export function initializeAnalytics() {
  ReactGA.initialize(process.env.REACT_APP_GA_KEY);
  ReactGA.pageview('/homepage');
}
