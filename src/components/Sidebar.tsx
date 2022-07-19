import {
  Sidebar as GrommetSidebar,
  Nav,
  Button,
  Box,
  Avatar,
  Collapsible,
  List,
} from 'grommet';
import * as Icons from 'grommet-icons';
import { useState } from 'react';

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Box width={isMenuOpen ? 'medium' : 'xsmall'} height={'large'}>
      <GrommetSidebar background='brand'>
        <Nav gap='small'>
          <Button
            icon={
              isMenuOpen ? <Icons.CaretLeftFill /> : <Icons.CaretRightFill />
            }
            hoverIndicator
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Collapsible open={isMenuOpen}>
            <Box>
              <List
                primaryKey='name'
                secondaryKey='percent'
                data={[
                  { name: 'Alan', percent: 20 },
                  { name: 'Bryan', percent: 30 },
                  { name: 'Chris', percent: 40 },
                  { name: 'Eric', percent: 80 },
                ]}
              />
            </Box>
          </Collapsible>
        </Nav>
      </GrommetSidebar>
    </Box>
  );
}

export default Sidebar;
