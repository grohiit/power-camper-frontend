import Image from 'next/image'

export default function TestPage() {
  return (
    <>
      <div className="max-w-5xl m-20 mx-auto">
        <h1 className="text-4xl ">
          The Best Backpacks for College and High School Students
        </h1>
        <div className="text-base mx-2 ">
          By {`Zoe Vanderweide`}
          <div className="text-sm text-gray-500 ">
            Updated September 12, 2022
          </div>
        </div>

        <div className="my-2">
          <Image
            alt="The Best Backpacks for College and High School Students"
            role="presentation"
            src="https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-2x1-0006.jpg"
            width="1024"
            height="512"
          ></Image>
        </div>
        <div className="mx-2 mb-10">
          <p className="">
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
          </p>
        </div>
        <div className="border-t-2 border-black mx-2">
          <h2 className="mt-2 ">About the Author</h2>
          <div className="flex items-center space-x-3 mb-2">
            <Image
              loading="lazy"
              alt="Zoe Vanderweide"
              src="https://cdn.thewirecutter.com/wp-content/media/2022/06/zoe-vanderweide.jpg"
              width="150"
              height="150"
              className="rounded-full"
            />
            <div className="font-bold">
              <p>Zoe Vanderweide</p>
            </div>
          </div>
          <div>
            <p>
              Zoe Vanderweide is a staff writer reporting on style and
              accessories at Wirecutter. She has been wearing things for over
              three decades, and she has spent years covering streetwear,
              luxury, art, and design. Off the clock, you can find her painting
              the town rainbow with her (devastatingly stylish) daughter.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
