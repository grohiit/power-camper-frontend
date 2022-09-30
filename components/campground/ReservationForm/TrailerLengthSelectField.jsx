import SelectOption from './SelectOption'

export default function TrailerLengthSelectField({ maxLength }) {
  const lengthOptions = [...Array(maxLength - 9).keys()].map((v) => v + 10)
  return (
    <>
      <select id="maxeqplen" name="maxeqplen">
        {lengthOptions.map((len) => (
          <SelectOption option={[len, len]} />
        ))}
      </select>
    </>
  )
}
