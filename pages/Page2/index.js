import Link from 'next/link'

export default function
    Page2({username}) {
    return (
        <>
            <h1>
                this is the timeline {username}
            </h1>
            <Link href="/">
                <a>Go home</a>     
             </Link>
        </>
    )
}

Page2.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => {
            console.log(response)
            const { username } = response
            return {username}
        })
}