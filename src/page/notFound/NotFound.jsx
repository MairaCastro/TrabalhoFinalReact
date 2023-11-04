import { useState } from 'react'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="error-page">
                <h1>Opa, ocorreu algum erro!!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}