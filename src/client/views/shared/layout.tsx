import * as React from "react";
import {Link} from "react-router-dom";
import {Routes} from "../../../routes";

export const Layout = (props:{children}) =>
	<div>
		<Header/>
		{props.children}
	</div>;


const Header = () =>
	<nav>
        <li><Link to={Routes.home}>Home</Link></li>
		<li><Link to={Routes.blog}>Blog</Link></li>
		<li><Link to={Routes.contact}>Contact</Link></li>
	</nav>;
