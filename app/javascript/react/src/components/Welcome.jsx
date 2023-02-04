import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Welcome = () => {
    return(
        <div className='container'>
            <h1>Hello Welcome Taimour</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Welcome></Welcome>, document.getElementById('root'))
})

export default Welcome;