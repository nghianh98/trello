import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Column from './Column/Column'
import { horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'

export default function ListColums({ column }) {
  return (
    <SortableContext items={column?.map((c) => c._id)} strategy={horizontalListSortingStrategy}>
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
        {column?.map((x) => {
          return <Column key={x._id} column={x} />
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
    </SortableContext>
  )
}
