import { EViewType } from 'Enums/EViewType';
import { useActiveViewSetter } from 'Hooks/useActiveViewSetter';
import LoginPageContent from 'Components/Login/LoginPageContent/LoginPageContent';

const LoginPage = () => {
  useActiveViewSetter(EViewType.LOGIN);

  return <LoginPageContent />;
};

export default LoginPage;
