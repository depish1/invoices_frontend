import { ReactNode, Suspense } from 'react';

import Loader from 'Components/SharedComponents/Loader/Loader';

interface ISuspensePageProps {
  page: ReactNode;
}

const SuspensePage = ({ page }: ISuspensePageProps) => <Suspense fallback={<Loader />}>{page}</Suspense>;

export default SuspensePage;
