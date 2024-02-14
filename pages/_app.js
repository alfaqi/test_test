import Header from "/components/Header";
import "/styles/globals.css";
import Head from "next/head";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { sepolia, mainnet, optimism, optimismSepolia } from "wagmi/chains";
import Footer from "../components/Footer";
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, optimism, sepolia, optimismSepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>BlockBadge</title>
        <meta name="description" content="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <WagmiConfig config={wagmiConfig}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </div>
  );
}
