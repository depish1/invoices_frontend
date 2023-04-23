import { EViewType } from 'Enums/EViewType';
import { useActiveViewSetter } from 'Hooks/useActiveViewSetter';
import { NotFoundContent } from 'Components/NotFound/NotFoundContent/NotFoundContent';

export const NotFoundPage = () => {
  useActiveViewSetter(EViewType.LOGIN);

  return <NotFoundContent />;
};
