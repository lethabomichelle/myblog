import React from "react"
import './homepage.css'

export default function Homepage() {
    return (
        <div className="hero">
            <div className="home">
                <h3>Active</h3>
                <h1>Fitness and wellness inspo</h1>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                <button class="btn " type="submit">Search</button>
            </form>

        </div>
    )
}