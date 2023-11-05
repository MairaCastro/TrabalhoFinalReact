import { useState } from 'react'
import Card from "../../components/cardProduct/CardProduct";

export default function Home(){
    return(
        <>
            <h1>Home</h1>
            <div className="App">
                <div className="container" >
                    <Card />
                </div>
            </div>
        </>
    )
}