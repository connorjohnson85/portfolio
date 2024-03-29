import { Box, Button, Paper, Stack, Typography, styled} from '@mui/material'
import { useEffect, useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function TicTacToeBoard() {

  const [row1, setRow1] = useState([0, 0, 0])
  const [row2, setRow2] = useState([0, 0 ,0])
  const [row3, setRow3] = useState([0, 0 ,0])
  const [player1Turn, setPlayer1Turn] = useState(true)
  const [winState, setWinState] = useState('')

  const clear = () => {
    setWinState('')
    setPlayer1Turn(true)
    setRow1([0, 0 , 0])
    setRow2([0, 0, 0])
    setRow3([0, 0, 0])
  }

  const checkWin = () => {
    if (row1[0] === 1 && row1[1] === 1 && row1[2] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row2[0] === 1 && row2[1] === 1 && row2[2] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row3[0] === 1 && row3[1] === 1 && row3[2] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row1[0] === 1 && row2[1] === 1 && row3[2] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row1[2] === 1 && row2[1] === 1 && row3[0] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row1[0] === 1 && row2[0] === 1 && row3[0] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row1[1] === 1 && row2[1] === 1 && row3[1] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row1[2] === 1 && row2[2] === 1 && row3[2] === 1) {
        setWinState('Player 1 Wins!')
    }
    if (row1[0] === 2 && row1[1] === 2 && row1[2] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row2[0] === 2 && row2[1] === 2 && row2[2] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row3[0] === 2 && row3[1] === 2 && row3[2] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row1[0] === 2 && row2[1] === 2 && row3[2] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row1[2] === 2 && row2[1] === 2 && row3[0] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row1[0] === 2 && row2[0] === 2 && row3[0] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row1[1] === 2 && row2[1] === 2 && row3[1] === 2) {
        setWinState('Player 2 Wins!')
    }
    if (row1[2] === 2 && row2[2] === 2 && row3[2] === 2) {
        setWinState('Player 2 Wins!')
    }
  }

  const checkDraw = () => {
    const row1Same = row1.every((num) => num != 0)
    const row2Same = row2.every((num) => num != 0)
    const row3Same = row3.every((num) => num != 0)
    return row1Same && row2Same && row3Same
  }

  useEffect(() => {
    checkWin();
    if (checkDraw()) {
        setWinState('Draw')
    }
  }, [player1Turn])

  return (
      <Box p={2} display={'inline-flex'} flexDirection={'column'}>
        <Typography variant='h4' marginBottom={7}>
            {winState ? winState : player1Turn ? 'Player 1\'s turn' : 'Player 2\'s turn'}
        </Typography>
        <Box width={'100%'}>
            <Stack spacing={1}>
                <Stack spacing={2} direction={'row'} key='row1'>
                    {row1.map((item, step) => <TicTacToePiece winState={winState} key={`row1${step}`} index={step} value={item === 1 ? 'x' : item === 2 ? 'o' : ' '} row={row1} setRow={setRow1} playerTurn={player1Turn} setTurn={setPlayer1Turn}/>)}
                </Stack>
                <Stack key='row2' spacing={2} direction={'row'}>
                    {row2.map((item, step) => <TicTacToePiece winState={winState} key={`row2${step}`} index={step}  value={item === 1 ? 'x' : item === 2 ? 'o' : ' '} row={row2} setRow={setRow2} playerTurn={player1Turn} setTurn={setPlayer1Turn}/>)}
                </Stack>
                <Stack key='row3' spacing={2} direction={'row'}>
                    {row3.map((item, step) => <TicTacToePiece winState={winState} key={`row3${step}`} index={step}  value={item === 1 ? 'x' : item === 2 ? 'o' : ' '} row={row3} setRow={setRow3} playerTurn={player1Turn} setTurn={setPlayer1Turn}/> )}
                </Stack>
            </Stack>
        </Box>
        <Button onClick={() => clear()}>
            Clear Board
        </Button>
      </Box>
  );
}

const TicTacToePiece = ({ value, setRow, index, row, playerTurn, setTurn, winState }: { value: string, row: number[], index: number, setRow: (newValue: number[]) => void, playerTurn: boolean, setTurn: (newValue: boolean) => void, winState: string}) => <>
    <Item>
        <Button sx={{height: '100%'}}onClick={() => {
            if (value === ' ') {
                if (!winState) {
                    if(playerTurn) {
                        let newArray = row
                        newArray[index] = 1
                        setRow(newArray)
                    } else {
                        let newArray = row
                        newArray[index] = 2
                        setRow(newArray)
                    }
                    setTurn(!playerTurn)
            } }
        }}>{value}</Button>
    </Item>
</>


export default TicTacToeBoard;
