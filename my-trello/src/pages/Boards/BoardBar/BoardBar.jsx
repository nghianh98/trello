import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formaters'
const MENU_STYLES = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

export default function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#c3d6e9'),
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 2,
        gap: 2,
        overflowX: 'auto',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLES} icon={<DashboardIcon />} label={board?.title} clickable />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} label='Add to drive' clickable />
        <Chip sx={MENU_STYLES} icon={<BoltIcon />} label='Automation' clickable />
        <Chip sx={MENU_STYLES} icon={<FilterListIcon />} label='Filters' clickable />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          sx={{ color: 'white', borderColor: 'white' }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>

        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='nghianh98' arrow>
            <Avatar alt='Remy Sharp' src='' />
          </Tooltip>
          <Tooltip title='nghianh98' arrow>
            <Avatar alt='Travis Howard' src='' />
          </Tooltip>
          <Tooltip title='nghianh98' arrow>
            <Avatar alt='Cindy Baker' src='' />
          </Tooltip>
          <Tooltip title='nghianh98' arrow>
            <Avatar alt='Agnes Walker' src='' />
          </Tooltip>
          <Tooltip title='nghianh98' arrow>
            <AvatarGroup alt='Trevor Henderson' src='' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
