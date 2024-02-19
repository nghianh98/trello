import Box from '@mui/material/Box'
import Card from './Card/Card'

export default function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) => `calc(
                ${theme.trello.boardContentHeight} -
                ${theme.trello.columnHeaderHeight} -
                ${theme.trello.columnFooterHeight} - 
                ${theme.spacing(5)}
            )`,
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: 'white' }
      }}
    >
      {cards.map((card) => {
        return <Card key={card._id} card={card} />
      })}
    </Box>
  )
}
