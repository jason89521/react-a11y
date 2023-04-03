import { Button, ToggleButton } from '@/components';
import style from './page.module.css';

export default function ButtonPage() {
  return (
    <div className={style.container}>
      <Button className={style.action}>Print</Button>
      <ToggleButton />
    </div>
  );
}
