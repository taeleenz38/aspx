import Section1 from "./components/layout/work/Section1";
import Section2 from "./components/layout/work/Section2";
import Section3 from "./components/layout/work/Section3";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
