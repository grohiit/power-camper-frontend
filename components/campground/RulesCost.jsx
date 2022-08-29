import CampgroundRules from './CampgroundRules'
import CampgroundCost from './CampgroundCost'

const RulesCost = ({ data }) => {
  const { campgroundRules, activities, campgroundCost, name } = data ? data : {}

  return (
    <>
      <section className="mt-20 lg:mt-28  ">
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
