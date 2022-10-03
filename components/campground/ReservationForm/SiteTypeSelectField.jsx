import SelectOption from './SelectOption'

export default function SiteTypeSelectField({
  siteTypes,
  handleSiteTypeChange,
}) {
  return (
    <>
      <label className="font-Cabin text-base text-white font-medium">
        Site Type:
      </label>
      <select
        id="category_types"
        name="category_types"
        onChange={handleSiteTypeChange}
      >
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
