import Image from 'next/image'

export default function TestPage() {
  const authorBio = `Zoe Vanderweide is a staff writer reporting on style and accessories
  at Wirecutter. She has been wearing things for over three decades,
  and she has spent years covering streetwear, luxury, art, and
  design. Off the clock, you can find her painting the town rainbow
  with her (devastatingly stylish) daughter.`
  const content = `<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
  aspernatur quos eveniet veniam doloremque reprehenderit sequi nihil
  natus! Dolorum laboriosam, sunt placeat iste sint, illum recusandae
  modi veritatis voluptas error atque aperiam quos fugiat doloribus et
  id totam minus cupiditate maiores adipisci quas expedita suscipit!
  Ipsum neque libero incidunt earum distinctio labore asperiores
  minus. Quo, odit saepe. Maiores consequatur maxime repellat aliquid
  repellendus molestiae nostrum aspernatur voluptate non adipisci
  atque itaque, ipsam odit reprehenderit minus! Nesciunt architecto
  ratione quis nihil illum reprehenderit error, saepe nam porro
  explicabo dignissimos corporis natus temporibus, veniam optio nobis
  eius! Voluptatum possimus incidunt accusamus sed?
</p>`
  return (
    <>
      <p>
        Below are step by step instructions on how to set up a new scan on Power
        Camper.
      </p>
      <p>
        <Image
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1665518980/articleImages/Image%202_1918a2f5-9024-41a3-8c2a-d388e603158d.png"
          width={512}
          height={140}
        />
      </p>
      <h3>
        <strong>(Optional Step)</strong>
      </h3>
      <p>
        If you’d like to look for the same dates at multiple campgrounds, follow
        these instructions:
      </p>
      <p>
        <Image
          src="https://res.cloudinary.com/dqdzorc8z/image/upload/v1665518980/articleImages/Image%201_28640c5e-b2f4-41cb-9fd8-2fefc4b7d9cd.png"
          width={512}
          height={354}
        />
      </p>
    </>
  )
}
