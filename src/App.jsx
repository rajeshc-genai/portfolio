import { Suspense, lazy } from 'react';
import { Portfolio } from './components/portfolio/Portfolio';

const Hero3D = lazy(() => import('./components/portfolio/Hero3D'));
const PhotoCarousel3D = lazy(() => import('./components/portfolio/PhotoCarousel3D'));

export default function App() {
  return <Portfolio Hero3D={Hero3D} PhotoCarousel3D={PhotoCarousel3D} Suspense={Suspense} />;
}
