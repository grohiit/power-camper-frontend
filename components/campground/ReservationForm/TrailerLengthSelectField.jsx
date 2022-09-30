import SelectOption from './SelectOption'

export default function TrailerLengthSelectField({ maxLength, siteType }) {
  const lengthOptions = [...Array(maxLength - 9).keys()].map((v) => v + 10)
  const validSiteTypeToDisplayLength = ['RV Site', 'Trailer Site']
  if (validSiteTypeToDisplayLength.includes(siteType)) {
    return (
      <>
        <select id="maxeqplen" name="maxeqplen">
          {lengthOptions.map((len, index) => (
            <SelectOption option={[len, `${len} ft.`]} key={index} />
          ))}
        </select>
      </>
    )
  } else {
    return (
      <>
        <select id="maxeqplen" name="maxeqplen" disabled>
          {lengthOptions.map((len, index) => (
            <SelectOption option={[len, `${len} ft.`]} key={index} />
          ))}
        </select>
      </>
    )
  }
}
