import { marked } from 'marked'

const bestCampsiteDescription = `These are some of the better campsites at South Carlsbad, based on location and proximity to the facilities or beach access. Have a favorite of your own? Let us know in the reviews!
&nbsp;
### Sites 99-101
- Cheaper ($35) Inland campsites
- Directly across from beach access stairs
- Very close to  facilities
  

### Sites 69-75
- Campsites at the end of the line for less traffic
- Close to Beach access / Tower 27
- Nearby to facilities
- 73-75 are Inland, 69-72 are beach view ($50)
- Potentially loud if the nearby group campsite is in use
&nbsp;
### Sites 2-10, 124-130, 131-134, 215-222
- Very close to entrance, Camp Store, Wavehuggers Surf School & Beach access
- 131-134 are paved pads on inland side
- 215-222 are paved pads on ocean side
- 128 is a large lot next to campground host, providing a fenced border on one side for more privacy`

marked.setOptions({
  breaks: true,
  gfm: true,
})

export default function TestPage() {
  console.log(bestCampsiteDescription)
  console.log(marked(bestCampsiteDescription))

  return (
    <>
      <section className=" mt-20 lg:mt-28 xl:mt-36" id="About">
        <div className="container mx-auto">
          <div className="lg:flex  content-center">
            <div className="lg:w-3/6 lg:pr-[25px] mb-20 lg:mb-0">
              <div
                className="text-justify font-Cabin text-lg opacity-70 mb-6"
                dangerouslySetInnerHTML={{
                  __html: marked(bestCampsiteDescription),
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
