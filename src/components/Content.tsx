import '@/styles/Content.css';
import { Card } from '@/components/Card';

export function Content() {
  return (
    <div className='glass__container'>
      <div className='glass__effect'></div>
      <div className='glass__color'></div>
      <div className='glass__shine'></div>
      <div className='glass__content'>
        <Card />
      </div>
    </div>
  );
}
