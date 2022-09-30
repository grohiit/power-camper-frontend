import SelectOption from './SelectOption'

export default function MaxPeopleSelectField({ maxPeople }) {
  const peopleOptions = [...Array(maxPeople).keys()].map((v) => v + 1)
  return (
    <>
      <div className="flex sm:w-96 justify-between mb-4 sm:mb-6 items-center">
        <label className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
          Number in your party:
        </label>
        <select id="maxpeople" name="maxpeople">
          {peopleOptions.map((peopleCount) => (
            <SelectOption option={[peopleCount, peopleCount]} />
          ))}
        </select>
      </div>
    </>
  )
}
