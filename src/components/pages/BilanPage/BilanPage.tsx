import { PublicLayout } from '@/components/templates/PublicLayout';
import { Link } from 'react-router-dom';

export const BilanPage = () => {
  return (
    <PublicLayout>
      <Link to="/Veille">page bilan</Link>
    </PublicLayout>
  );
};
