import { Aside } from "./components/aside/aside";
import { Sections } from "./components/sections/sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row w-full flex-grow">
        <Aside />
        <main className="flex-grow md:w-3/5 lg:w-2/4 px-6 py-12 bg-base-950">
          <Sections />
        </main>
      </div>
    </div>
  );
}
