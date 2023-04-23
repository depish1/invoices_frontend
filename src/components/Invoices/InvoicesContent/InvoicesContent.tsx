import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Container, Wrapper } from './InvoiceContent.style';
import { EViewType } from 'Enums/EViewType';
import InvoicesTable from 'Components/Invoices/InvoicesTable/InvoicesTable';
import { ViewHeaderWithButton } from 'Components/SharedComponents/ViewHeader/ViewHeaderWithButton';

const InvoicesContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateToAddInvoiceForm = () => navigate(`/${EViewType.INVOICE_FORM}`);

  return (
    <Container>
      <ViewHeaderWithButton buttonClickHandler={navigateToAddInvoiceForm} buttonText={t('addInvoice')} headerText={t('invoices')} />
      <Wrapper>
        <InvoicesTable />
      </Wrapper>
    </Container>
  );
};

export default InvoicesContent;
