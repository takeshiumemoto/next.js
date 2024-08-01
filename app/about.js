import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function About(){
    retrun(
        <Container>
                <Meta 
                pageTitle="アバウト" 
                pageDesc="About development activities"
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
                />
            <Hero title="About" subtitle="About development activities"/>
        </Container>
    )
}