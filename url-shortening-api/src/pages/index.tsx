import Head from "next/head";
// import '../../sass/pages/home.scss';
import Nav from "../components/nav";
import Header from "../components/header";
import Layout from "../components/layout";
import Branding from "../components/branding";
import Boost from "../components/boost";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>
                    Frontend Mentor | Shortly URL shortening API Challenge
                </title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../../images/favicon-32x32.png"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Nav />
            <Header />
            <Branding />
            <Boost />
        </Layout>
    );
}
