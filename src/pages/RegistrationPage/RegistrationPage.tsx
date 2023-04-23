import { EViewType } from 'Enums/EViewType';
import { useActiveViewSetter } from 'Hooks/useActiveViewSetter';
import { RegistrationPageContent } from 'Components/Registration/RegistrationPageContent/RegistrationPageContent';

const RegistrationPage = () => {
  useActiveViewSetter(EViewType.LOGIN);

  return <RegistrationPageContent />;
};

export default RegistrationPage;
