import WhyChoose from "@/components/why-choose";
import { baseUrl } from "@/utils/constant";

export default function Home({ data }) {
  console.log("Data from API:", data);
  return (
    <div className="bg-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <WhyChoose data={data?.data}/>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/why-choose?populate[listing][populate]=image`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 60, // ISR (optional)
  };
}
