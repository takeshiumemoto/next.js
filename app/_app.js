import Layout from 'components/layout'
import 'styles/sample.css'
import 'styles/globals.css'
import '@fortawesome/fontawesome-svg-core/style.css'
import {config} from '@fontawesome/fontwesome-svg-countReset'
config.autoAddCss = false
 
export function MyApp({Component,pageProps}){
    return(
        <Layout> 
        <Component{...pageProps}/>  
        </Layout>
    )
}

