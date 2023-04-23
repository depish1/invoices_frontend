import { View, Text } from '@react-pdf/renderer';

import { invoicePDFstyles } from '../InvoicePDF.style';

interface IDataColumnProps {
  name: string;
  address: string;
  address2?: string;
  nip: string;
  headline?: string;
}

export const DataColumn = ({ name, address, address2, nip, headline }: IDataColumnProps) => (
  <View style={invoicePDFstyles.column}>
    {!!headline && <Text style={invoicePDFstyles.sectionHeadline}>{headline}</Text>}
    <Text style={invoicePDFstyles.defaultText}>{name}</Text>
    <Text style={invoicePDFstyles.defaultText}>{address}</Text>
    {!!address2 && <Text style={invoicePDFstyles.defaultText}>{address2}</Text>}
    <Text style={invoicePDFstyles.defaultText}>{nip}</Text>
  </View>
);
