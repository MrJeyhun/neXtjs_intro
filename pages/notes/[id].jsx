/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'

export default ({note}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note.title} </h1>
    </div>
  )
}


//FIXME: Cannot set headers after they are sent to the client =>> id: Date.now() + i in data.js ???
export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.API_URL}/api/note/${params.id}`)
  console.log(response)
  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}
