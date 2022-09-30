import SelectOption from './SelectOption'

export default function SiteTypeSelectField({ siteTypes }) {
  return (
    <>
      <label className="font-Cabin text-sm lg:text-base  text-white font-medium mb-3 sm:mb-0">
        Site Type:
      </label>
      <select id="category_types" name="category_types">
        {siteTypes.map((siteType, index) => (
          <SelectOption
            option={[
              siteType == 'Cabin' ? 'Cabin and Lodging' : `${siteType} Site`,
              siteType,
            ]}
            key={index}
          />
        ))}
      </select>
    </>
  )
}
