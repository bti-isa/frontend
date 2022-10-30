import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  useTheme,
  Typography,
  Box,
  TextField, Button,
} from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from '@mui/icons-material/Search';

const dummyData = [
  {
    id: "1",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "2",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "3",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "4",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "5",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "6",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "7",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "8",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "9",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "10",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "11",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "12",
    name: "Marko",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "13",
    name: "Marko",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "14",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "15",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "16",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "17",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "18",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "19",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
  {
    id: "20",
    name: "Nikola",
    surname: "Nikolic",
    email: "email@gmail.com",
    gender: "Male",
  },
];

const styles = {
  cell: {
    minWidth: "auto",
    fontSize: "1.5rem",
    color: "white",
  },
};

const UserList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container sx={{ display: "block" }}>
      <TableContainer component={Paper} sx={{ width: "80%", margin: "0 auto" }}>
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderBottom: "1px solid white",
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{display: 'flex'}}>
            <PersonIcon color="secondary" fontSize="large" />
            <Typography variant="h4" color="secondary">
              Users
            </Typography>
          </Box>
          <Box sx={{display: 'flex', padding: '1rem'}}>
            <TextField variant="outlined" color="secondary" label="Search" margin="none"
                InputLabelProps={{
                    style : {
                        color: 'white'
                    }}
                }
                inputProps = {{
                    style: {
                        borderColor: 'white',
                        color: 'white'
                    }
                }}
                />
            <Button variant="contained" color="secondary" sx={{marginLeft: '1rem'}}>
              <SearchIcon />
            </Button>
          </Box>
          
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                position: "sticky",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <TableCell align="left" style={styles.cell}>
                Name
              </TableCell>
              <TableCell align="right" style={styles.cell}>
                Surname
              </TableCell>
              <TableCell align="right" style={styles.cell}>
                Email
              </TableCell>
              <TableCell align="right" style={styles.cell}>
                Gender
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left" style={{ minWidth: "auto" }}>
                      {row.name}
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: "auto" }}>
                      {row.surname}
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: "auto" }}>
                      {row.email}
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: "auto" }}>
                      {row.gender}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ width: "80%", margin: "0 auto" }}
        rowsPerPageOptions={[10, 30, 100]}
        component="div"
        count={dummyData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default UserList;
