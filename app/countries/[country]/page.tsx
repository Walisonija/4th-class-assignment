// app/countries/[country]/page.tsx
import Link from 'next/link';

interface CountryPageProps {
  params: {
    country: string;
  };
}

const CountryPage = ({ params }: CountryPageProps) => {
  const { country } = params;

  const countryDetails = {
    usa: {
      name: "United States of America",
      population: "331 million",
      capital: "Washington D.C.",
    },
    india: {
      name: "India",
      population: "1.4 billion",
      capital: "New Delhi",
    },
    germany: {
      name: "Germany",
      population: "83 million",
      capital: "Berlin",
    },
    canada: {
      name: "Canada",
      population: "38 million",
      capital: "Ottawa",
    },
    australia: {
      name: "Australia",
      population: "26 million",
      capital: "Canberra",
    },
    // Add more countries here if needed
  };

  const countryInfo = countryDetails[country as keyof typeof countryDetails];

  if (!countryInfo) {
    return <h1 className="text-2xl font-bold text-red-600">Country not found!</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{countryInfo.name}</h1>
      <p className="text-xl text-gray-700">Population: {countryInfo.population}</p>
      <p className="text-xl text-gray-700 mb-6">Capital: {countryInfo.capital}</p>
      
      <Link href="/">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default CountryPage;

// app/countries/[country]/page.tsx
// app/countries/[country]/page.tsx
export const generateStaticParams = async () => {
    return [
      { country: 'usa' },
      { country: 'india' },
      { country: 'germany' },
      { country: 'canada' },
      { country: 'australia' },
      // Add more countries here
    ];
  };
  
  
