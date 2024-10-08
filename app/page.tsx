import {Header} from "./_components/Header";
import {Hero} from "./_components/Hero";
import {Status} from "./_components/Status";

export default function Home() {
    return (
        <main>
            <link rel="icon" href="/favicon.ico" sizes={"any"}/>
            <Header></Header>
            <Hero></Hero>
            <Status></Status>
        </main>
    );
}
