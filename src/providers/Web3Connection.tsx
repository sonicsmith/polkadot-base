import { ApiPromise } from '@polkadot/api';
import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface InjectedAccountWithMeta {
  address: string;
  meta: {
    genesisHash?: string | null;
    name?: string;
    source: string;
  };
  type?: string;
}

export interface InjectedExtension {
  name: string;
  version: string;
  accounts: any;
  metadata?: any;
  provider?: any;
  signer: any;
}

export interface Web3ConnectionValue {
  injector: InjectedExtension | null;
  setInjector: Dispatch<SetStateAction<InjectedExtension | null>>;
  api: ApiPromise;
  setApi: Dispatch<SetStateAction<ApiPromise | null>>;
}

const value: any = null;

const Web3Connection = createContext(value);

export default Web3Connection;

export const Web3ConnectionProvider = (props: { children: any }) => {
  const [injector, setInjector] = useState<InjectedExtension | null>(null);
  const [api, setApi] = useState<ApiPromise | null>(null);
  return (
    <Web3Connection.Provider
      value={{ injector, setInjector, api, setApi }} // TODO: Fix
    >
      {props.children}
    </Web3Connection.Provider>
  );
};

export const Web3ConnectionConsumer = Web3Connection.Consumer;
