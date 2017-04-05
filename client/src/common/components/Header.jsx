import React, { Component } from 'react';

import '../../static/css/header.scss';

export default class Header extends Component {

    render() {

        return (
        	<div className="header">
            	<svg viewBox="0 0 100 100">
    				<polygon fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
  				</svg>
          	</div>

        );
    }
}