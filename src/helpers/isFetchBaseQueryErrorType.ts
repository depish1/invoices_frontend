import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export const isFetchBaseQueryErrorType = (error: FetchBaseQueryError | SerializedError): error is FetchBaseQueryError => {
  return 'status' in error;
};
