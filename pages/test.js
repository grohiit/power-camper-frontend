import Image from 'next/image'

export default function TestPage() {
  return (
    <>
      <div className="max-w-5xl m-20 mx-auto">
        <h1>The Best Backpacks for College and High School Students</h1>

        <div className="mx-auto flex justify-center">
          <Image
            alt="The Best Backpacks for College and High School Students"
            role="presentation"
            src="https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-2x1-0006.jpg"
            width="1024"
            height="512"
          ></Image>
        </div>
        <div className="m-20">
          <p>
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
        <div className="max-w-5xl border-2 border-black mx-auto m-20">
          <br />
          <hr />
          <div>
            <div>
              <a id="author-bios"></a>
              <h2>About your guide</h2>
              <div>
                <div>
                  <div>
                    <Image
                      loading="lazy"
                      alt="Zoe Vanderweide"
                      src="https://cdn.thewirecutter.com/wp-content/media/2022/06/zoe-vanderweide.jpg"
                      width="150"
                      height="150"
                    />
                  </div>
                  <div>
                    <p>Zoe Vanderweide</p>
                    <div>
                      <a
                        href="mailto:notes@wirecutter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          width="16px"
                          height="15px"
                          viewBox="0 0 20 15"
                          version="1.1"
                        >
                          <path
                            data-testid="email-fill-area"
                            fill="#979797"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.523,3.316 L18.535,3.327 L10.679,9.761 C10.482,9.921 10.239,10.002 10,10.002 C9.76,10.002 9.517,9.921 9.32,9.761 L1.464,3.327 L1.476,3.316 C1.453,3.3 1.445,3.277 1.427,3.259 L1.427,1.784 L2.963,1.784 L10,7.545 L17.037,1.784 L18.572,1.784 L18.572,3.259 C18.554,3.277 18.546,3.3 18.523,3.316 L18.523,3.316 Z M0,15 L20,15 L20,0 L0,0 L0,15 Z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    Zoe Vanderweide is a staff writer reporting on style and
                    accessories at Wirecutter. She has been wearing things for
                    over three decades, and she has spent years covering
                    streetwear, luxury, art, and design. Off the clock, you can
                    find her painting the town rainbow with her (devastatingly
                    stylish) daughter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
