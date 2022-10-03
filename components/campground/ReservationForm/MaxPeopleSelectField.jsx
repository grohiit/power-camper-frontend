import SelectOption from './SelectOption'

export default function MaxPeopleSelectField({ maxPeople }) {
  const peopleOptions = [...Array(maxPeople).keys()].map((v) => v + 1)
  return (
    <>
      <label className="font-Cabin text-base text-white font-medium">
        Number in your party:
      </label>
      <select id="maxpeople" name="maxpeople">
        {peopleOptions.map((peopleCount, index) => (
          <SelectOption option={[peopleCount, peopleCount]} key={index} />
        ))}
      </select>
    </>
  )
}
