import Layout from 'components/layout'
import 'styles/sample.css'
import 'styles/globals.css'

export function MyApp({Component,pageProps}){
    return(
        <Layout> 
        <Component{...pageProps}/>  
        </Layout>
    )
}

