import { useTranslation } from 'react-i18next';

import { checkIfValueIsLessThan100 } from 'Helpers/checkIfValueIsLessThan100';
import { useGrossAmount } from 'Components/InvoiceForm/hooks/useGrossAmount';
import { DeleteButton } from 'Components/SharedComponents/DeleteButton/DeleteButton';
import { InputController } from 'Components/SharedComponents/FormFieldsControllers/InputController/InputController';
import { NumericInputController } from 'Components/SharedComponents/FormFieldsControllers/InputController/NumericInputController';

interface IProductFieldProps {
  productIndex: number;
  removeProduct: (item: number) => void;
  showDeleteButton: boolean;
}

export const ProductField = ({ productIndex, removeProduct, showDeleteButton }: IProductFieldProps) => {
  const { t } = useTranslation();
  const fieldName = `products.${productIndex}`;

  useGrossAmount(productIndex);

  return (
    <>
      <InputController id={`${fieldName}.name`} isLabelHidden isRequired label={t('name')} name={`${fieldName}.name`} />
      <NumericInputController
        allowNegative={false}
        decimalScale={0}
        id={`${fieldName}.quantity`}
        isLabelHidden
        isRequired
        label={t('quantity')}
        name={`${fieldName}.quantity`}
      />
      <NumericInputController
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale
        id={`${fieldName}.net_price`}
        isLabelHidden
        isRequired
        label={t('net_price')}
        name={`${fieldName}.net_price`}
        suffix=" zł"
      />

      <NumericInputController
        allowNegative={false}
        decimalScale={0}
        id={`${fieldName}.tax_rate`}
        isAllowed={checkIfValueIsLessThan100}
        isLabelHidden
        isRequired
        label={t('tax_rate')}
        name={`${fieldName}.tax_rate`}
        suffix=" %"
      />
      <NumericInputController
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale
        id={`${fieldName}.gross_amount`}
        isLabelHidden
        isRequired
        label={t('gross_amount')}
        name={`${fieldName}.gross_amount`}
        readOnly
        suffix=" zł"
        thousandSeparator={true}
      />
      {showDeleteButton && <DeleteButton onClick={() => removeProduct(productIndex)} />}
    </>
  );
};
