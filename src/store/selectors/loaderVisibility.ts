import { RootStateType } from 'Store/store';

export const isLoaderVisibleSelector = (state: RootStateType) => state.loaderVisibility;
