import { Contador } from '../../components/Contador';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mostrador',
  description: 'Mostrador de productos',
};


export default function MostradorPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <span>Productos en el carrito</span>
      <Contador value={0} />
    </div>
  );
}