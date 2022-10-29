import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
//import {Link} from "react-router-dom";
//import "./Users.css"



function Users() {
	const [users, setUsers] = useState([]);

	if(users.length === 0){
		fetch('https://randomuser.me/api/?results=500')
			.then((response) => response.json())
			.then((result) => {
				console.log(result)
				setUsers(result.results.slice(50, 100))
			})
	}

	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = 10;
	const pagesVisited = pageNumber * usersPerPage;
	const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) =>{
		return(
			<div>
				<h3>Last Name: {user.name.last}</h3>
				<h3>First Name: {user.name.first} </h3>
				<h3>Gender: {user.gender}</h3>
				<h3>Phone No: {user.phone}</h3>
				<img src ={user.picture.large} alt=""/>
				<h3>email: {user.email}</h3>
				<h3>Nationality: {user.nat}</h3>
				
			</div>
		)
	})

	const pageCount = Math.ceil(users.length / usersPerPage);

	const changePage = ({selected}) =>{
		setPageNumber(selected)
	}

	
  return (
	<div>
		{displayUsers}
		<ReactPaginate
			previousLabel = {"Previous"}
			nextLabel = {"Next"}
			pageCount = {pageCount}
			onPageChange = {changePage}
			containerClassName = {"pagination"}
			previousLinkClassName = {"page-num"}
			nextLinkClassName = {"page-num"}
			disabledClassName = {"paginationDisabled"}
			activeClassName = {"paginationActive"}
		/>
	</div>
  )
}

export default Users