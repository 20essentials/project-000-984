import { Background } from '@/components/Background.tsx';
import { LiquidGlassProvider } from 'react-liquid-glass-effect';
import 'react-liquid-glass-effect/dist/react-liquid-glass-effect.css';
import { Content } from '@/components/Content';

export const App = () => {
  return (
    <>
      <Background />
      <LiquidGlassProvider>
        <Content />
      </LiquidGlassProvider>
    </>
  );
};
