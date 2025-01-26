"use server";

async function SelectCountry({ defaultCountry, name, id, className,guest }) {
  const res = await fetch("https://restcountries.com/v2/all?fields=name,flag");

  const countries = await res.json();




  return (
    <select
      name={name}
      id={id}
      defaultValue={guest.nationality ?? defaultCountry}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
