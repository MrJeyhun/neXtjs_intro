/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
    </div>
  </div> 
)

export function getStaticProps(context) {

  return {
    props: {
      content: {
        title: "This is a my really nice app"
      }
    }
  }
}