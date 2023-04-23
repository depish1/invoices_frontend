import { Trans } from 'react-i18next';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { EViewType } from 'Enums/EViewType';
import { Header404, Paragraph, Wrapper } from './NotFoundContent.style';
import { useCountDown } from 'Hooks/useCountDown';
import { Semibold } from 'Components/SharedComponents/SharedStyles/SharedStyles';

export const NotFoundContent = () => {
  const [counter, countDown] = useCountDown();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => (counter ? countDown(counter) : navigate(`/${EViewType.LOGIN}`)), 1000);

    return () => clearTimeout(timeoutId);
  }, [countDown, counter, navigate]);

  return (
    <Wrapper>
      <Header404>404</Header404>
      <Paragraph>
        <Trans components={{ semibold: <Semibold /> }} i18nKey="notFoundDescription" values={{ counter: counter }} />
      </Paragraph>
    </Wrapper>
  );
};
