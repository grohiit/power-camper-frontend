import Link from 'next/link'
export default function SeeAllButton({ state }) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  return (
    <div className="text-center underline text-base lg:text-lg my-5">
      <Link href={`${domain}/camping/${state.toLowerCase()}`}>
        <a className="no-underline text-black hover:text-black visited:text-black">
          See all {state} guides
        </a>
      </Link>
    </div>
  )
}
