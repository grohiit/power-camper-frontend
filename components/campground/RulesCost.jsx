import CampgroundRules from './CampGroundRules'
import CampgroundCost from './CampGroundCost'

const RulesCost = ({ data }) => {
  const { campgroundRules, activities, campgroundCost, name } = data ? data : {}

  return (
    <>
      <section className="my-16">
        <div className="container mx-auto">
          <div className="lg:flex content-center">
            <CampgroundRules campgroundRules={campgroundRules} name={name} />
            <CampgroundCost campgroundCost={campgroundCost} name={name} />
          </div>
        </div>
      </section>
    </>
  )
}

export default RulesCost
