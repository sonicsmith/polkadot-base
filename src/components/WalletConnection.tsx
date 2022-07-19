import { useState, useEffect, useContext } from 'react';
import { Box, Button, Text } from 'grommet';
import { ApiPromise, WsProvider } from '@polkadot/api';
import {
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from '@polkadot/extension-dapp';
import { options } from '@acala-network/api';
import Web3Connection, {
  InjectedAccountWithMeta,
  Web3ConnectionValue,
} from '../providers/Web3Connection';
import Popup, { PopUpStatus } from './Popup';

const getAddressObscured = (address: string) => {
  return `${address.substring(0, 5)}...${address.substring(
    address.length - 4
  )}`;
};

function WalletConnection() {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [error, setError] = useState('');
  const { injector, setInjector, api, setApi } =
    useContext<Web3ConnectionValue>(Web3Connection);

  useEffect(() => {
    const connectToNetwork = async () => {
      const wsEndpoint = process.env.REACT_APP_WS_NODE_ENDPOINT;
      const provider = new WsProvider(wsEndpoint);
      const _api = new ApiPromise(
        options({
          provider,
        })
      );
      await _api.isReady;
      setApi(_api);
      console.log(`Api Ready for endpoint: ${wsEndpoint}`);
    };
    connectToNetwork();
  }, []);

  const connectToWallet = async () => {
    const extensions = await web3Enable('Polkadot Example');
    if (extensions.length === 0) {
      setError('No extension installed!');
      return;
    }
    const accounts = await web3Accounts();
    setAccounts(accounts);
    // TODO: Which account
    const _injector = await web3FromAddress(accounts[0].address);
    setInjector(_injector);
  };

  return (
    <Box pad={'small'}>
      {/* {error && <div>Error: {error}</div>}
      {accounts.map((account, index) => (
        <div style={{ marginTop: 10 }} key={Math.random()}>
          <button onClick={() => connectToAccount(index)}>
            {account.address}
          </button>
        </div>
      ))} */}
      {error && (
        <Popup
          popUp={{ message: error, status: PopUpStatus.Error }}
          setPopUp={() => setError('')}
        />
      )}
      <Box>
        {!injector ? (
          <Button label={'CONNECT'} onClick={connectToWallet} />
        ) : (
          <Button
            label={getAddressObscured(accounts[0].address)}
            onClick={console.log}
          />
        )}
      </Box>
    </Box>
  );
}

export default WalletConnection;
