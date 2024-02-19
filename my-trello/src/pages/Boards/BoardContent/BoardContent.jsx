import Box from '@mui/material/Box'
import ListColums from './ListColumns/ListColums'
import { mapOrder } from '~/utils/sorts'

export default function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box
      sx={{
        width: '100%',
        p: '10px 0',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        height: (theme) => theme.trello.boardContentHeight
      }}
    >
      <ListColums columns={orderedColumns} />
    </Box>
  )
}
