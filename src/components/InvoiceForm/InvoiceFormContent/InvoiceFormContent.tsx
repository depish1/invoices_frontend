import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Container } from './InvoiceFormContent.style';
import { EViewType } from 'Enums/EViewType';
import { useInvoiceFormParams } from 'Components/InvoiceForm/hooks/useInvoiceFormParams';
import InvoiceForm from 'Components/InvoiceForm/InvoiceForm/InvoiceForm';
import ViewHeaderWithButton from 'Components/SharedComponents/ViewHeader/ViewHeaderWithButton';

const InvoiceFormContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useInvoiceFormParams();

  const navigateToAddForm = () => navigate(`/${EViewType.INVOICES}`);

  return (
    <Container>
      <ViewHeaderWithButton buttonClickHandler={navigateToAddForm} buttonText={t('back')} headerText={t(id ? 'editInvoice' : 'newInvoice')} />
      <InvoiceForm />
    </Container>
  );
};

export default InvoiceFormContent;
