import Link from 'next/link'
export default function StateSubTitle({ state }) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN

  return (
    <Link href={`${domain}/camping/${state.toLowerCase()}`}>
      <a className="no-underline text-black hover:text-black visited:text-black block my-5">
        <h2 className="text-left ml-10 inline">{state} Camping Guides</h2>
        <span className="float-right mx-10 underline text-base lg:text-lg">
          See all {state} guides
        </span>
      </a>
    </Link>
  )
}
