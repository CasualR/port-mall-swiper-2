
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import MainDescription from './components/blocks/mainDescription';

export default async function Home({ params }) {

    console.log(params, 'from page');

    return (
        <>
            <main className="main">
                <MainDescription passedValue={params} />
            </main>
        </>
    )
}
