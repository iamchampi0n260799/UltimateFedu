import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionFetchUsersList } from "./modules/action";
import Loader from "../../../components/Loader";
import queryString from "query-string";
import Pagination from '@material-ui/lab/Pagination';
import {
  useHistory,
  useLocation,
  Link,
} from "react-router-dom";
import useTable from "../components/UseTable";
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Checkbox } from '@material-ui/core';
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import InputControls from "../components/controls/Input";
const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  },
  searchInput: {
    width: '75%'
  }
}))

const headCells = [
  { id: 'checked', label: 'Check' },
  { id: 'taiKhoan', label: 'Tài khoản' },
  { id: 'hoTen', label: 'Họ tên' },
  { id: 'email', label: 'Email' },
  { id: 'soDt', label: 'Số điện thoại' },
  { id: 'maLoaiNguoiDung', label: 'Mã loại người dùng', disableSorting: true },
]

export default function Users(props) {
  const classes = useStyles();
  const loading = useSelector(state => state.usersListReducer.loading);
  const data = useSelector(state => state.usersListReducer.data);
  const error = useSelector(state => state.usersListReducer.error);
  const dispatch = useDispatch();

  // const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });

  let items = [];
  if (data) {
    items = data;
  }

  useEffect(() => {
    dispatch(actionFetchUsersList("GP01"));
  }, [dispatch]);

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(items, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: items => {
        if (target.value == "")
          return items;
        else
          return items.filter(x => x.hoTen.toLowerCase().includes(target.value))
      }
    })
  }

  // const isSelected = (name) => selected.indexOf(name) !== -1;

  if (loading) return <Loader />;
  return (
    <>
      <PageHeader
        title="Danh Sách Người Dùng"
        subTitle="Học viên và Giáo vụ"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <InputControls
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (<InputAdornment position="start">
                <Search />
              </InputAdornment>)
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {
              recordsAfterPagingAndSorting().map(item =>
              (<TableRow key={item.taiKhoan}>
                <TableCell>
                  <Checkbox
                  // checked={isItemSelected}
                  // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </TableCell>
                <TableCell>{item.taiKhoan}</TableCell>
                <TableCell>{item.hoTen}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.soDt}</TableCell>
                <TableCell>{item.maLoaiNguoiDung}</TableCell>

              </TableRow>)
              )
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
}
