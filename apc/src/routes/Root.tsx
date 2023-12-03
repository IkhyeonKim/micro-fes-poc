import React from "react"

// const ButtonProps = React.lazy(() => import("remoteApp/ButtonProps"))
const Button = React.lazy(() => import("remoteApp/Button"))
// import Button from "remoteApp/Button"

export default function Root () {
    return <div>
        <h1 className="font-bold">This is APC</h1>
        <div>
            <Button label="Hello" />
        </div>
    </div>
}