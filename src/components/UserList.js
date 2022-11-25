import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, useTheme, Typography, Box, TextField, Button, } from "@mui/material";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  cell: {
    minWidth: "auto",
    fontSize: "1.5rem",
    color: "white",
  },
};

const UserList = ({ users }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchParameters, setSearchParameters] = useState("")
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
          <Box sx={{ display: 'flex' }}>
            <PersonIcon color="secondary" fontSize="large" />
            <Typography variant="h4" color="secondary">
              Users
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', padding: '1rem' }}>
            <TextField variant="outlined" color="secondary" label="Search" margin="none"
              onChange={(event) => setSearchParameters(event.target.value)}
              InputLabelProps={{
                style: {
                  color: 'white'
                }
              }
              }
              inputProps={{
                style: {
                  borderColor: 'white',
                  color: 'white'
                }
              }}
            />
            <Button variant="contained" color="secondary" sx={{ marginLeft: '1rem' }}>
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
            {users
              .filter(user =>
              (user.firstname.toLowerCase().includes(searchParameters)
                || user.lastname.toLowerCase().includes(searchParameters)
              ))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left" style={{ minWidth: "auto" }}>
                      {row.firstname}
                    </TableCell>
                    <TableCell align="right" style={{ minWidth: "auto" }}>
                      {row.lastname}
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
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default UserList;
