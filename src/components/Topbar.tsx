import { Header, Button } from 'grommet';
import * as Icons from 'grommet-icons';
import WalletConnection from './WalletConnection';

function Topbar() {
  return (
    <Header background='brand' pad={{ left: 'small' }}>
      <Button icon={<Icons.Home />} hoverIndicator />
      <WalletConnection />
    </Header>
  );
}

export default Topbar;
