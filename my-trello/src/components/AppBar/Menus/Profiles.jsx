import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

export default function Profiles() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Tooltip title='Account settings'>
        <IconButton
          onClick={handleClick}
          size='small'
          sx={{ padding: 0 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt='nghianh98'
            src='https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/323433633_1610363862735601_4420723894521922847_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=a73e89&_nc_ohc=xYk791g2IuYAX9vqW0S&_nc_ht=scontent.fhan3-3.fna&oh=00_AfB2zIEtW5_3umn4YAg40iobEX-1PkJJ9XnrcmWBvblNgQ&oe=65B8212D'
          />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // PaperProps={{
        //   elevation: 0,
        //   sx: {
        //     overflow: 'visible',
        //     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        //     mt: 1.5,
        //     '& .MuiAvatar-root': {
        //       width: 32,
        //       height: 32,
        //       ml: -0.5,
        //       mr: 1
        //     },
        //     '&::before': {
        //       content: '""',
        //       display: 'block',
        //       position: 'absolute',
        //       top: 0,
        //       right: 14,
        //       width: 10,
        //       height: 10,
        //       bgcolor: 'background.paper',
        //       transform: 'translateY(-50%) rotate(45deg)',
        //       zIndex: 0
        //     }
        //   }
        // }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize='small' />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
