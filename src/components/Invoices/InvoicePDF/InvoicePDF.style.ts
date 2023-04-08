import { Font, StyleSheet } from '@react-pdf/renderer';

import PoppinsRegular from 'Styles/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from 'Styles/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from 'Styles/fonts/Poppins-Bold.ttf';

Font.register({
  family: 'Poppins',
  fonts: [
    { src: PoppinsRegular, fontWeight: 400 },
    { src: PoppinsSemiBold, fontWeight: 600 },
    { src: PoppinsBold, fontWeight: 700 },
  ],
});

export const invoicePDFstyles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    color: 'black',
  },
  layout: { fontFamily: 'Poppins', flexDirection: 'column', padding: 30 },
  invoiceHeader: { flexDirection: 'row', justifyContent: 'center', marginVertical: 15, width: '100%' },
  dataWrapper: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 30 },
  column: { flexDirection: 'column' },
  justifyFlexEnd: { flexDirection: 'row', justifyContent: 'flex-end' },
  table: { flexDirection: 'column', width: '100%', borderLeft: '1px solid #000000', fontSize: 10, marginBottom: 15 },
  tableRow: { flexDirection: 'row', width: '100%', borderBottom: '1px solid #000000' },
  tableHeaderRow: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#DDDDDD',
    fontWeight: 600,
    borderBottom: '1px solid #000000',
    borderTop: '1px solid #000000',
  },
  tableCell: { borderRight: '1px solid #000000', paddingVertical: 8, paddingHorizontal: 4 },
  invoiceHeadline: { fontWeight: 700, fontSize: 20 },
  defaultText: { fontSize: 10 },
  sectionHeadline: { fontSize: 12, fontWeight: 600, marginBottom: 2 },
});
