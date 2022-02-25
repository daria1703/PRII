import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
            title: '',
			image: '',
			content: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://pr-movies.herokuapp.com/api/movies', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const {title, image, content } = this.state
		return (
            <div className="con">
                <div className="container3">
                    <div className="container4">
                        <h2 className="titleform">Add film</h2>
                        <form onSubmit={this.submitHandler}>
                            <div className="name">
                                <label className="label" htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    name="title"
                                    className='input'
                                    value={title}
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className="name">
                                <label className="label" htmlFor="image">Image:</label>
                                <input
                                    type="text"
                                    name="image"
                                    className='input'
                                    value={image}
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className='name'>
                                <label className="label" htmlFor="content">Description:</label>
                                <input
                                    type="text"
                                    name="content"
                                    className='input'
                                    value={content}
                                    onChange={this.changeHandler}
                                />
                            </div>
                            <div className="btn-div">
                                <button type="submit" className='button2'><Link class="link-btn2" to={'./home'}>Submit</Link></button>
                            </div>
                        </form>
                    </div>
                </div>
                <footer class='footer' >
                    <p class="footer">Copy right 2022 - Films</p>
                </footer>
            </div>
            
			
		)
	}
}

export default PostForm