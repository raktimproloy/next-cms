'use client'
import dynamic from 'next/dynamic'
const ErrorPage = dynamic(() => import('@/components/shared/error/ErrorPage'))
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <ErrorPage/>
  )
}