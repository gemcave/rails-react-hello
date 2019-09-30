import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
	background-color: #d74234;
	min-height: 550px;
	padding: 100px 0;
	color: #fff;
`

const Header = styled.h1`
	color: #fff;
	font-weight: 700;
	font-size: 40px;
	line-height: 52px;
`

const SubHead = styled.p`
	font-size: 18px;
	font-weight: 500;
`


const Jumbotron = () => {
	return (
		<Section className="home-section--1">
			<div className="container">
				<div className="row">
					<div className="col col-sm-12 col-md-5">
						<div className="pt-4 mt-4">
							<Header>Digital Painting and Drawing For Developers</Header>
							<SubHead>Supercharge your drawing skills</SubHead>
						</div>
					</div>
					<div className="col col-sm-12 col-md-7">
						<div className="pt-4 mt-4 text-center">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/6ziBFh3V1aM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Jumbotron