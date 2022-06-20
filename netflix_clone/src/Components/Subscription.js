import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck , faXmark} from '@fortawesome/free-solid-svg-icons'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Monthly cost * (Indian Rupee)', '199 INR', '499 INR', '649 INR', ),
  createData('Number of screens you can watch on at the same time', 1, 2, 4, ),
  createData('Number of phones or tablets you can have downloads on', 1, 2, 4,),
  createData('Unlimited movies, TV shows and mobile games', <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>),
  createData('Watch on your mobile phone and tablet', <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>),
  createData('Watch on your laptop and TV', <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>),
  createData('HD available', <FontAwesomeIcon icon={faXmark}/>, <FontAwesomeIcon icon={faCheck}/>, <FontAwesomeIcon icon={faCheck}/>),
  createData('Ultra HD available', <FontAwesomeIcon icon={faXmark}/>, <FontAwesomeIcon icon={faXmark}/>, <FontAwesomeIcon icon={faCheck}/>),
];

function Subscription() {
  return (
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell></TableCell>
    //         <TableCell align="right">Basic</TableCell>
    //         <TableCell align="right">Standard</TableCell>
    //         <TableCell align="right">Premium</TableCell>
    //         <TableCell></TableCell>
           
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.calories}</TableCell>
    //           <TableCell align="right">{row.fat}</TableCell>
    //           <TableCell align="right">{row.carbs}</TableCell>
    //           <TableCell align="right">{row.protein}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <>
        <table>
            <thead>
              <tr>
                <th>ada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-100">
                <td></td>
              </tr>
            </tbody>
        </table>
    </>
  )
}

export default Subscription