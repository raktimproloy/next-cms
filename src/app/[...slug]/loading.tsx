// import SimpleLoader from "@/components/shared/loading/SingleLoader"
import dynamic from "next/dynamic"
const SimpleLoader = dynamic(() => import('@/components/shared/loading/SingleLoader'), {
    ssr: false
})

export default function Loading (){
    return(
        <>
        <div style={{height:"80vh", background: "black"}}>
            <SimpleLoader/>
        </div>
        </>
    )
}