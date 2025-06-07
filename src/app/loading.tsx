import dynamic from 'next/dynamic'
const LoadingPage = dynamic(() => import('@/components/shared/loading/Loading'), {
    ssr: false
})


export default async function Loading (){

    return(
        <>
            <LoadingPage/>
        </>
    )
}