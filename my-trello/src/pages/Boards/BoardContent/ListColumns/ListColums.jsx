import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Columns from './Columns/Columns'

export default function ListColums({ columns }) {
  return (
    <Box
      sx={{
        backgroundColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 } // tab thanh scroll bar
      }}
    >
      {columns?.map((column) => {
        return <Columns key={column._id} column={column} />
      })}

      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          backgroundColor: '#ffffff3d'
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
        >
          Add a new column
        </Button>
      </Box>
    </Box>
  )
}
