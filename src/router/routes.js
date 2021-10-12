import TestView from '@/pages/TestView';
import Home from '@/pages/Home';
import Premier from '@/pages/Premier';

export default [
  { path: '/testview', component: TestView, name: 'test-view' },
  { path: '/', component: Home, name: 'home' },
  { path: '/premier', component: Premier, name: 'premier' },
];
