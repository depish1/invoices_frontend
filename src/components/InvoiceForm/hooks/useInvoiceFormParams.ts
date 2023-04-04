import { useSearchParams } from 'react-router-dom';

export const useInvoiceFormParams = () => {
  const [params] = useSearchParams();
  const id = +params.get('id');

  return id;
};
