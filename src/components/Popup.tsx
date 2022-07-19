import { Box, Button, Layer, Text } from 'grommet';

export enum PopUpStatus {
  Error = 'error',
  Info = 'info',
}

export interface PopUpMessage {
  message: string;
  status: PopUpStatus;
}

function Popup(props: { setPopUp: Function; popUp: PopUpMessage }) {
  const { setPopUp, popUp } = props;
  const { message, status } = popUp;
  return (
    <Layer onEsc={() => setPopUp(false)} onClickOutside={() => setPopUp(false)}>
      <Box border={true} pad={'medium'} round={'small'}>
        <Box margin={{ bottom: 'medium' }}>
          <Text size={'2xl'} textAlign={'center'}>
            {status === PopUpStatus.Info ? 'SUCCESS' : 'ERROR'}
          </Text>
          <Text textAlign={'center'}>{message}</Text>
          <Text textAlign={'center'}>
            {status === PopUpStatus.Error && 'PLEASE TRY AGAIN'}
          </Text>
        </Box>
        <Button label={'OK'} onClick={() => setPopUp(false)} />
      </Box>
    </Layer>
  );
}

export default Popup;
